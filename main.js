require('dotenv').config()

const Web3 = require('web3');


const fetch = require('node-fetch');

const parseDiff = require('parse-diff');

const {Octokit} = require("@octokit/rest");

const {Webhooks, createNodeMiddleware} = require("@octokit/webhooks");

const {ERC20PresetMinterPauser} = require("./abi/ERC20PresetMinterPauser");

const { MongoClient } = require('mongodb');

// const { ethers } = require("ethers");
// const ethersPolygonHttpProvider = new ethers.providers.JsonRpcProvider(polygonRPCUrl);
// const signer = ethersPolygonHttpProvider.getSigner();

const polygonRPCUrl = "https://polygon-rpc.com";
const polygonHttpProvider = new Web3.providers.HttpProvider(polygonRPCUrl);

// const web3 = new Web3(polygonProvider Web3.givenProvider);
const web3 = new Web3(polygonHttpProvider);
const ownerAddress = process.env.CONTRACT_OWNER_ADDRESS;
const contractAddress = process.env.CONTRACT_ADDRESS;
const privateKey = process.env.PRIVATE_KEY;


const tokenContract = new web3.eth.Contract(ERC20PresetMinterPauser.abi, contractAddress, {from: ownerAddress});


const signTransaction = async (tokenContract, fromPrivateKey, toAddress, balance) => {
    const encodedTransferABI = tokenContract.methods.transfer(toAddress, balance).encodeABI();

    const estimatedGas = await tokenContract.methods.transfer(toAddress, balance).estimateGas({
        to: contractAddress,
        data: encodedTransferABI,
    });

    const Tx = {
        // We are sending request to WETH contract, asking it to transfer tokens.
        to: contractAddress,
        gas: estimatedGas,
        // We send zero native token, which is Matic on Polygon network.
        value: "0x0",
        // We set only tip for the miner, baseFeePerGas(which is burned) will be set automatically.
        // In order to send legacy transaction(before London fork), you can use gas and gasPrice.
        maxPriorityFeePerGas: await web3.eth.getGasPrice(),
        data: `${encodedTransferABI}`,
    };

    const signTransactionOutput = await web3.eth.accounts.signTransaction(
        Tx,
        fromPrivateKey
    );

    return signTransactionOutput.rawTransaction;
};

const sendTransaction = (rawTransaction) => {
    return web3.eth.sendSignedTransaction(
        rawTransaction
    ).once('transactionHash', (function (hash) {
        console.log(`tx hash: ${hash}`)
    }))
        .on('confirmation', function (confNumber, receipt) {
            console.log(`Confirmation: ${confNumber}`);
        })
        .on('error', async function (error) {
            console.log('something went wrong...', error);
        });
}

const calculateKarma = (pullRequest, diffs) => {

}

const sendTest = async () => {
    // const totalBalance = await tokenContract.methods.balanceOf(ownerAddress).call();
    // console.log("BBG", totalBalance);

    // for testing (vitalik address)
    const recipientAddress = "0xc1e42f862d202b4a0ed552c1145735ee088f6ccf";
    const amount = web3.utils.toWei('1000');
    const rawTransaction = await signTransaction(tokenContract, privateKey, recipientAddress, amount);
    sendTransaction(rawTransaction);
};

// sendTest();

/*
const createTransaction = await web3.eth.accounts.signTransaction(
    {
        from: ownerAddress,
        to: recipientAddress,
        value: web3.utils.toWei('100', 'ether'),
        gas: '21000',
    },
    privateKey
);
*/

const octokit = new Octokit({
    auth: process.env.GITHUB_PERSONAL_TOKEN,
});

const webhooks = new Webhooks({
    secret: process.env.GITHUB_WEBHOOK_SECRET
});

const polygonAddressRE = /polygon:(0x[a-fA-F0-9]{40}$)/;

webhooks.onAny(({id, name, payload}) => {
    console.log(name, "event received");
});

webhooks.on([
    "issue_comment.created",
    "issue_comment.edited",
], ({id, name, payload}) => {

    const issueNumber = payload.number;
    const issueOwner = payload.issue.user.login;
    const commentOwner = payload.comment.user.login;
    if (issueOwner != commentOwner) {
        return
    }

    // check the address format
    const matched = polygonAddressRE.exec(payload.comment.body)
    if (matched) {
        const address = matched[1];
        console.log("matched address", address);


    } else {
        const comment = `Hi @${issueOwner},
    
You left an invalid address format, please write your address with the following format:
 
        polygon:0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
      
`
        const resp = octokit.rest.issues.createComment({
            owner: payload.repository.owner.login,
            repo: payload.repository.name,
            issue_number: issueNumber,
            body: comment,
        });
        console.log(resp);

    }
})

webhooks.on([
    "pull_request.opened"
], ({id, name, payload}) => {
    const issueNumber = payload.number;

    const userLogin = payload.pull_request.user.login;
    const baseOwner = payload.repository.owner.login;
    const baseRepo = payload.repository.name;

    const comment = `Hi @${userLogin},
    
To receive BBG token, please left your polygon address as an issue comment in this pull request with the following format, e.g.,
 
        polygon:0xAb5801a7D398351b8bE11C439e05C5B3259aeC9B
      
Once this pull request is merged, your BBG token will be sent to your wallet.
`

    const resp = octokit.rest.issues.createComment({
        owner: baseOwner,
        repo: baseRepo,
        issue_number: issueNumber,
        body: comment,
    });
    console.log(resp);
})

webhooks.on([
    "pull_request.opened",
    "pull_request.reopened",
    "pull_request.synchronize",
    "pull_request.closed"
], async ({id, name, payload}) => {
    console.log(name, id, payload);

    const userLogin = payload.pull_request.user.login;
    const diffUrl = payload.pull_request.diff_url;
    const issueNumber = payload.number;
    const state = payload.pull_request.state;

    const response = await fetch(diffUrl);
    const diffText = await response.text();
    const files = parseDiff(diffText);
    console.log(files);


});


// proxy
const EventSource = require('eventsource')
const webhookProxyUrl = "https://smee.io/sTg2t0azYcNNu5H1"; // replace with your own Webhook Proxy URL
const source = new EventSource(webhookProxyUrl);
source.onmessage = (event) => {
    const webhookEvent = JSON.parse(event.data);
    webhooks
        .verifyAndReceive({
            id: webhookEvent["x-request-id"],
            name: webhookEvent["x-github-event"],
            signature: webhookEvent["x-hub-signature"],
            payload: webhookEvent.body,
        })
        .catch(console.error);
};

require("http").createServer(createNodeMiddleware(webhooks)).listen(3301);
