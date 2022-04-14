exports.ERC20PresetMinterPauser = {
  "contractName": "ERC20PresetMinterPauser",
  "abi": [
    {
      "inputs": [
        {
          "internalType": "string",
          "name": "name",
          "type": "string"
        },
        {
          "internalType": "string",
          "name": "symbol",
          "type": "string"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "constructor"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Approval",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Paused",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "previousAdminRole",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "newAdminRole",
          "type": "bytes32"
        }
      ],
      "name": "RoleAdminChanged",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleGranted",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "sender",
          "type": "address"
        }
      ],
      "name": "RoleRevoked",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "internalType": "address",
          "name": "from",
          "type": "address"
        },
        {
          "indexed": true,
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "indexed": false,
          "internalType": "uint256",
          "name": "value",
          "type": "uint256"
        }
      ],
      "name": "Transfer",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": false,
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "Unpaused",
      "type": "event"
    },
    {
      "inputs": [],
      "name": "DEFAULT_ADMIN_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "MINTER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "PAUSER_ROLE",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "owner",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        }
      ],
      "name": "allowance",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "approve",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "balanceOf",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burn",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "burnFrom",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "decimals",
      "outputs": [
        {
          "internalType": "uint8",
          "name": "",
          "type": "uint8"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "subtractedValue",
          "type": "uint256"
        }
      ],
      "name": "decreaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleAdmin",
      "outputs": [
        {
          "internalType": "bytes32",
          "name": "",
          "type": "bytes32"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "uint256",
          "name": "index",
          "type": "uint256"
        }
      ],
      "name": "getRoleMember",
      "outputs": [
        {
          "internalType": "address",
          "name": "",
          "type": "address"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        }
      ],
      "name": "getRoleMemberCount",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "grantRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "hasRole",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "spender",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "addedValue",
          "type": "uint256"
        }
      ],
      "name": "increaseAllowance",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "name",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "paused",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "renounceRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "bytes32",
          "name": "role",
          "type": "bytes32"
        },
        {
          "internalType": "address",
          "name": "account",
          "type": "address"
        }
      ],
      "name": "revokeRole",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "symbol",
      "outputs": [
        {
          "internalType": "string",
          "name": "",
          "type": "string"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "totalSupply",
      "outputs": [
        {
          "internalType": "uint256",
          "name": "",
          "type": "uint256"
        }
      ],
      "stateMutability": "view",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transfer",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "sender",
          "type": "address"
        },
        {
          "internalType": "address",
          "name": "recipient",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "transferFrom",
      "outputs": [
        {
          "internalType": "bool",
          "name": "",
          "type": "bool"
        }
      ],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [
        {
          "internalType": "address",
          "name": "to",
          "type": "address"
        },
        {
          "internalType": "uint256",
          "name": "amount",
          "type": "uint256"
        }
      ],
      "name": "mint",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "pause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "inputs": [],
      "name": "unpause",
      "outputs": [],
      "stateMutability": "nonpayable",
      "type": "function"
    }
  ],
  "metadata": "{\"compiler\":{\"version\":\"0.6.6+commit.6c089d02\"},\"language\":\"Solidity\",\"output\":{\"abi\":[{\"inputs\":[{\"internalType\":\"string\",\"name\":\"name\",\"type\":\"string\"},{\"internalType\":\"string\",\"name\":\"symbol\",\"type\":\"string\"}],\"stateMutability\":\"nonpayable\",\"type\":\"constructor\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Approval\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Paused\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"previousAdminRole\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"newAdminRole\",\"type\":\"bytes32\"}],\"name\":\"RoleAdminChanged\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleGranted\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"}],\"name\":\"RoleRevoked\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":true,\"internalType\":\"address\",\"name\":\"from\",\"type\":\"address\"},{\"indexed\":true,\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"indexed\":false,\"internalType\":\"uint256\",\"name\":\"value\",\"type\":\"uint256\"}],\"name\":\"Transfer\",\"type\":\"event\"},{\"anonymous\":false,\"inputs\":[{\"indexed\":false,\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"Unpaused\",\"type\":\"event\"},{\"inputs\":[],\"name\":\"DEFAULT_ADMIN_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"MINTER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"PAUSER_ROLE\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"owner\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"}],\"name\":\"allowance\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"approve\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"balanceOf\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burn\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"burnFrom\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"decimals\",\"outputs\":[{\"internalType\":\"uint8\",\"name\":\"\",\"type\":\"uint8\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"subtractedValue\",\"type\":\"uint256\"}],\"name\":\"decreaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleAdmin\",\"outputs\":[{\"internalType\":\"bytes32\",\"name\":\"\",\"type\":\"bytes32\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"uint256\",\"name\":\"index\",\"type\":\"uint256\"}],\"name\":\"getRoleMember\",\"outputs\":[{\"internalType\":\"address\",\"name\":\"\",\"type\":\"address\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"}],\"name\":\"getRoleMemberCount\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"grantRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"hasRole\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"spender\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"addedValue\",\"type\":\"uint256\"}],\"name\":\"increaseAllowance\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"to\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"mint\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"name\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"pause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"paused\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"renounceRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"bytes32\",\"name\":\"role\",\"type\":\"bytes32\"},{\"internalType\":\"address\",\"name\":\"account\",\"type\":\"address\"}],\"name\":\"revokeRole\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"symbol\",\"outputs\":[{\"internalType\":\"string\",\"name\":\"\",\"type\":\"string\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"totalSupply\",\"outputs\":[{\"internalType\":\"uint256\",\"name\":\"\",\"type\":\"uint256\"}],\"stateMutability\":\"view\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transfer\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[{\"internalType\":\"address\",\"name\":\"sender\",\"type\":\"address\"},{\"internalType\":\"address\",\"name\":\"recipient\",\"type\":\"address\"},{\"internalType\":\"uint256\",\"name\":\"amount\",\"type\":\"uint256\"}],\"name\":\"transferFrom\",\"outputs\":[{\"internalType\":\"bool\",\"name\":\"\",\"type\":\"bool\"}],\"stateMutability\":\"nonpayable\",\"type\":\"function\"},{\"inputs\":[],\"name\":\"unpause\",\"outputs\":[],\"stateMutability\":\"nonpayable\",\"type\":\"function\"}],\"devdoc\":{\"details\":\"{ERC20} token, including: *  - ability for holders to burn (destroy) their tokens - a minter role that allows for token minting (creation) - a pauser role that allows to stop all token transfers * This contract uses {AccessControl} to lock permissioned functions using the different roles - head to its documentation for details. * The account that deploys the contract will be granted the minter and pauser roles, as well as the default admin role, which will let it grant both minter and pauser roles to other accounts.\",\"methods\":{\"allowance(address,address)\":{\"details\":\"See {IERC20-allowance}.\"},\"approve(address,uint256)\":{\"details\":\"See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address.\"},\"balanceOf(address)\":{\"details\":\"See {IERC20-balanceOf}.\"},\"burn(uint256)\":{\"details\":\"Destroys `amount` tokens from the caller.     * See {ERC20-_burn}.\"},\"burnFrom(address,uint256)\":{\"details\":\"Destroys `amount` tokens from `account`, deducting from the caller's allowance.     * See {ERC20-_burn} and {ERC20-allowance}.     * Requirements:     * - the caller must have allowance for ``accounts``'s tokens of at least `amount`.\"},\"constructor\":{\"details\":\"Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE` and `PAUSER_ROLE` to the account that deploys the contract.     * See {ERC20-constructor}.\"},\"decimals()\":{\"details\":\"Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}.\"},\"decreaseAllowance(address,uint256)\":{\"details\":\"Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`.\"},\"getRoleAdmin(bytes32)\":{\"details\":\"Returns the admin role that controls `role`. See {grantRole} and {revokeRole}.     * To change a role's admin, use {_setRoleAdmin}.\"},\"getRoleMember(bytes32,uint256)\":{\"details\":\"Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive.     * Role bearers are not sorted in any particular way, and their ordering may change at any point.     * WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information.\"},\"getRoleMemberCount(bytes32)\":{\"details\":\"Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role.\"},\"grantRole(bytes32,address)\":{\"details\":\"Grants `role` to `account`.     * If `account` had not been already granted `role`, emits a {RoleGranted} event.     * Requirements:     * - the caller must have ``role``'s admin role.\"},\"hasRole(bytes32,address)\":{\"details\":\"Returns `true` if `account` has been granted `role`.\"},\"increaseAllowance(address,uint256)\":{\"details\":\"Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address.\"},\"mint(address,uint256)\":{\"details\":\"Creates `amount` new tokens for `to`.     * See {ERC20-_mint}.     * Requirements:     * - the caller must have the `MINTER_ROLE`.\"},\"name()\":{\"details\":\"Returns the name of the token.\"},\"pause()\":{\"details\":\"Pauses all token transfers.     * See {ERC20Pausable} and {Pausable-_pause}.     * Requirements:     * - the caller must have the `PAUSER_ROLE`.\"},\"paused()\":{\"details\":\"Returns true if the contract is paused, and false otherwise.\"},\"renounceRole(bytes32,address)\":{\"details\":\"Revokes `role` from the calling account.     * Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced).     * If the calling account had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must be `account`.\"},\"revokeRole(bytes32,address)\":{\"details\":\"Revokes `role` from `account`.     * If `account` had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must have ``role``'s admin role.\"},\"symbol()\":{\"details\":\"Returns the symbol of the token, usually a shorter version of the name.\"},\"totalSupply()\":{\"details\":\"See {IERC20-totalSupply}.\"},\"transfer(address,uint256)\":{\"details\":\"See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`.\"},\"transferFrom(address,address,uint256)\":{\"details\":\"See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}.     * Requirements:     * - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`.\"},\"unpause()\":{\"details\":\"Unpauses all token transfers.     * See {ERC20Pausable} and {Pausable-_unpause}.     * Requirements:     * - the caller must have the `PAUSER_ROLE`.\"}}},\"userdoc\":{\"methods\":{}}},\"settings\":{\"compilationTarget\":{\"@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol\":\"ERC20PresetMinterPauser\"},\"evmVersion\":\"istanbul\",\"libraries\":{},\"metadata\":{\"bytecodeHash\":\"ipfs\"},\"optimizer\":{\"enabled\":false,\"runs\":200},\"remappings\":[]},\"sources\":{\"@openzeppelin/contracts/access/AccessControl.sol\":{\"keccak256\":\"0x4fc155a2f7837603d69a13cfa481eb5e7f5e02cb77e2ec9edbac30986db37988\",\"urls\":[\"bzz-raw://0855147e38b5e36288a8df73b8da49132f14ec7abb19041b0c98872263643aaa\",\"dweb:/ipfs/QmSrSysyFUYQq7hbJaJXG7EyZW6ezDBzEJx3SABp6eiJSS\"]},\"@openzeppelin/contracts/math/SafeMath.sol\":{\"keccak256\":\"0xcc78a17dd88fa5a2edc60c8489e2f405c0913b377216a5b26b35656b2d0dab52\",\"urls\":[\"bzz-raw://526dc85e1f9b9b45830e202568d267d93dde7a4fcccf4ad7798dadcd92304d3c\",\"dweb:/ipfs/QmaoXMB972J3cSDLtBq3xBo4jLwqD2uzXTwujtSPqkYVhR\"]},\"@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol\":{\"keccak256\":\"0xa7c607ed4a0b2bebb811a398838ce4b5165e490f420a06337478eb2ba8c90cfc\",\"urls\":[\"bzz-raw://7eaf468e140d3430711cb859fbb41b097093069a75bfe4ab19e515c59f8b78ea\",\"dweb:/ipfs/QmYvdoCh8TAX7ucpMZspPpHpQZSuNe8cQTrbZyUcy3caqc\"]},\"@openzeppelin/contracts/token/ERC20/ERC20.sol\":{\"keccak256\":\"0xca0c2396dbeb3503b51abf4248ebf77a1461edad513c01529df51850a012bee3\",\"urls\":[\"bzz-raw://991b44ff44e0496e8554a90f4c0512c28faed45104d40430019f3c67ea67740e\",\"dweb:/ipfs/Qmc3nRapVbcctELoZS5qe17zLkFB3bETBfwzCTMF1CSuGE\"]},\"@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol\":{\"keccak256\":\"0x9c0eb3b0e11d2480d49991dc384f1e5f9c9b9967cc81944d50916a9b9c6c4984\",\"urls\":[\"bzz-raw://99e4033d778624992e86f0b6d801a4f6d7b5c0cd5c79c1296be90a051ad5f5af\",\"dweb:/ipfs/QmShYmkUqh6pDEeoWadZ24icmCr4C2Xys1uE5boivPmbwf\"]},\"@openzeppelin/contracts/token/ERC20/ERC20Pausable.sol\":{\"keccak256\":\"0xa22af140ae7ec1f8f2f3bed5869cd0d548dfaac66343f0efc7324ff34aaf1254\",\"urls\":[\"bzz-raw://fed479feda7354e89c095fde0927dcb581f460257bf93b7db54b2b902b4bbd48\",\"dweb:/ipfs/QmSDUhS2AQvTGXHwaxDgAXtwXKCgQh2kp1nwhwUgr2hQZK\"]},\"@openzeppelin/contracts/token/ERC20/IERC20.sol\":{\"keccak256\":\"0x5f02220344881ce43204ae4a6281145a67bc52c2bb1290a791857df3d19d78f5\",\"urls\":[\"bzz-raw://24427744bd3e6cb73c17010119af12a318289c0253a4d9acb8576c9fb3797b08\",\"dweb:/ipfs/QmTLDqpKRBuxGxRAmjgXt9AkXyACW3MtKzi7PYjm5iMfGC\"]},\"@openzeppelin/contracts/utils/Address.sol\":{\"keccak256\":\"0x28911e614500ae7c607a432a709d35da25f3bc5ddc8bd12b278b66358070c0ea\",\"urls\":[\"bzz-raw://256c8c8af5eb072bc473226ab2b2187149b8fc04f5f4a4820db22527f5ce8e3c\",\"dweb:/ipfs/QmRvi5BhnL7Rxf85KrJhwM6RRhukm4tzoctRdgQEheNyiN\"]},\"@openzeppelin/contracts/utils/Context.sol\":{\"keccak256\":\"0x8d3cb350f04ff49cfb10aef08d87f19dcbaecc8027b0bed12f3275cd12f38cf0\",\"urls\":[\"bzz-raw://ded47ec7c96750f9bd04bbbc84f659992d4ba901cb7b532a52cd468272cf378f\",\"dweb:/ipfs/QmfBrGtQP7rZEqEg6Wz6jh2N2Kukpj1z5v3CGWmAqrzm96\"]},\"@openzeppelin/contracts/utils/EnumerableSet.sol\":{\"keccak256\":\"0x1562cd9922fbf739edfb979f506809e2743789cbde3177515542161c3d04b164\",\"urls\":[\"bzz-raw://4580d57781513d98870d9738c7d39094336e0a70cdb90d68dad549c6ced466ec\",\"dweb:/ipfs/Qmf9YZzzRFuvMnav9dgmeRUpdYMMECiZX8w25sHWVbA18V\"]},\"@openzeppelin/contracts/utils/Pausable.sol\":{\"keccak256\":\"0x212fb1b1d4beaf74354dad9bc329f44ee3c5375ef1c32acff76b4ecefc10f1d8\",\"urls\":[\"bzz-raw://d21c68cb321d1c8d0fa39fd9ecb6bbe3b2f26623b0f38af280a010c916c85f23\",\"dweb:/ipfs/Qmf2P51HRC4ekDHLYfbXu5SXR33gXrWtq6oKSmfyWqVRuC\"]}},\"version\":1}",
  "bytecode": "0x60806040523480156200001157600080fd5b5060405162002c9e38038062002c9e833981810160405260408110156200003757600080fd5b81019080805160405193929190846401000000008211156200005857600080fd5b838201915060208201858111156200006f57600080fd5b82518660018202830111640100000000821117156200008d57600080fd5b8083526020830192505050908051906020019080838360005b83811015620000c3578082015181840152602081019050620000a6565b50505050905090810190601f168015620000f15780820380516001836020036101000a031916815260200191505b50604052602001805160405193929190846401000000008211156200011557600080fd5b838201915060208201858111156200012c57600080fd5b82518660018202830111640100000000821117156200014a57600080fd5b8083526020830192505050908051906020019080838360005b838110156200018057808201518184015260208101905062000163565b50505050905090810190601f168015620001ae5780820380516001836020036101000a031916815260200191505b5060405250505081818160049080519060200190620001cf92919062000490565b508060059080519060200190620001e892919062000490565b506012600660006101000a81548160ff021916908360ff16021790555050506000600660016101000a81548160ff021916908315150217905550620002466000801b6200023a620002fa60201b60201c565b6200030260201b60201c565b6200029c60405180807f4d494e5445525f524f4c45000000000000000000000000000000000000000000815250600b019050604051809103902062000290620002fa60201b60201c565b6200030260201b60201c565b620002f260405180807f5041555345525f524f4c45000000000000000000000000000000000000000000815250600b0190506040518091039020620002e6620002fa60201b60201c565b6200030260201b60201c565b50506200053f565b600033905090565b6200031482826200031860201b60201c565b5050565b6200034681600080858152602001908152602001600020600001620003bb60201b620020cc1790919060201c565b15620003b7576200035c620002fa60201b60201c565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6000620003eb836000018373ffffffffffffffffffffffffffffffffffffffff1660001b620003f360201b60201c565b905092915050565b60006200040783836200046d60201b60201c565b6200046257826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905062000467565b600090505b92915050565b600080836001016000848152602001908152602001600020541415905092915050565b828054600181600116156101000203166002900490600052602060002090601f016020900481019282601f10620004d357805160ff191683800117855562000504565b8280016001018555821562000504579182015b8281111562000503578251825591602001919060010190620004e6565b5b50905062000513919062000517565b5090565b6200053c91905b80821115620005385760008160009055506001016200051e565b5090565b90565b61274f806200054f6000396000f3fe608060405234801561001057600080fd5b50600436106101a95760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d539139314610888578063d547741f146108a6578063dd62ed3e146108f4578063e63ab1e91461096c576101a9565b8063a457c2d71461077a578063a9059cbb146107e0578063ca15c87314610846576101a9565b80639010d07c116100d35780639010d07c146105fb57806391d148541461067357806395d89b41146106d9578063a217fddf1461075c576101a9565b806370a082311461054b57806379cc6790146105a35780638456cb59146105f1576101a9565b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146104a357806340c10f19146104ad57806342966c68146104fb5780635c975abb14610529576101a9565b8063313ce567146103cb57806336568abe146103ef578063395093511461043d576101a9565b806306fdde03146101ae578063095ea7b31461023157806318160ddd1461029757806323b872dd146102b5578063248a9ca31461033b5780632f2ff15d1461037d575b600080fd5b6101b661098a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101f65780820151818401526020810190506101db565b50505050905090810190601f1680156102235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61027d6004803603604081101561024757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a2c565b604051808215151515815260200191505060405180910390f35b61029f610a4a565b6040518082815260200191505060405180910390f35b610321600480360360608110156102cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a54565b604051808215151515815260200191505060405180910390f35b6103676004803603602081101561035157600080fd5b8101908080359060200190929190505050610b2d565b6040518082815260200191505060405180910390f35b6103c96004803603604081101561039357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b4c565b005b6103d3610bd5565b604051808260ff1660ff16815260200191505060405180910390f35b61043b6004803603604081101561040557600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bec565b005b6104896004803603604081101561045357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c85565b604051808215151515815260200191505060405180910390f35b6104ab610d38565b005b6104f9600480360360408110156104c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ddd565b005b6105276004803603602081101561051157600080fd5b8101908080359060200190929190505050610e86565b005b610531610e9a565b604051808215151515815260200191505060405180910390f35b61058d6004803603602081101561056157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eb1565b6040518082815260200191505060405180910390f35b6105ef600480360360408110156105b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610efa565b005b6105f9610f5c565b005b6106316004803603604081101561061157600080fd5b810190808035906020019092919080359060200190929190505050611001565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106bf6004803603604081101561068957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611032565b604051808215151515815260200191505060405180910390f35b6106e1611063565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610721578082015181840152602081019050610706565b50505050905090810190601f16801561074e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610764611105565b6040518082815260200191505060405180910390f35b6107c66004803603604081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061110c565b604051808215151515815260200191505060405180910390f35b61082c600480360360408110156107f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506111d9565b604051808215151515815260200191505060405180910390f35b6108726004803603602081101561085c57600080fd5b81019080803590602001909291905050506111f7565b6040518082815260200191505060405180910390f35b61089061121d565b6040518082815260200191505060405180910390f35b6108f2600480360360408110156108bc57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611256565b005b6109566004803603604081101561090a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112df565b6040518082815260200191505060405180910390f35b610974611366565b6040518082815260200191505060405180910390f35b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a225780601f106109f757610100808354040283529160200191610a22565b820191906000526020600020905b815481529060010190602001808311610a0557829003601f168201915b5050505050905090565b6000610a40610a3961139f565b84846113a7565b6001905092915050565b6000600354905090565b6000610a6184848461159e565b610b2284610a6d61139f565b610b1d8560405180606001604052806028815260200161257960289139600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610ad361139f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118639092919063ffffffff16565b6113a7565b600190509392505050565b6000806000838152602001908152602001600020600201549050919050565b610b7260008084815260200190815260200160002060020154610b6d61139f565b611032565b610bc7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612477602f913960400191505060405180910390fd5b610bd1828261191d565b5050565b6000600660009054906101000a900460ff16905090565b610bf461139f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806126c1602f913960400191505060405180910390fd5b610c8182826119b0565b5050565b6000610d2e610c9261139f565b84610d298560026000610ca361139f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a4390919063ffffffff16565b6113a7565b6001905092915050565b610d7e60405180807f5041555345525f524f4c45000000000000000000000000000000000000000000815250600b0190506040518091039020610d7961139f565b611032565b610dd3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806124c86039913960400191505060405180910390fd5b610ddb611acb565b565b610e2360405180807f4d494e5445525f524f4c45000000000000000000000000000000000000000000815250600b0190506040518091039020610e1e61139f565b611032565b610e78576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806125a16036913960400191505060405180910390fd5b610e828282611bcc565b5050565b610e97610e9161139f565b82611d95565b50565b6000600660019054906101000a900460ff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610f39826040518060600160405280602481526020016125d760249139610f2a86610f2561139f565b6112df565b6118639092919063ffffffff16565b9050610f4d83610f4761139f565b836113a7565b610f578383611d95565b505050565b610fa260405180807f5041555345525f524f4c45000000000000000000000000000000000000000000815250600b0190506040518091039020610f9d61139f565b611032565b610ff7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806126656037913960400191505060405180910390fd5b610fff611f5b565b565b600061102a8260008086815260200190815260200160002060000161205d90919063ffffffff16565b905092915050565b600061105b8260008086815260200190815260200160002060000161207790919063ffffffff16565b905092915050565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110fb5780601f106110d0576101008083540402835291602001916110fb565b820191906000526020600020905b8154815290600101906020018083116110de57829003601f168201915b5050505050905090565b6000801b81565b60006111cf61111961139f565b846111ca8560405180606001604052806025815260200161269c602591396002600061114361139f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118639092919063ffffffff16565b6113a7565b6001905092915050565b60006111ed6111e661139f565b848461159e565b6001905092915050565b60006112166000808481526020019081526020016000206000016120a7565b9050919050565b60405180807f4d494e5445525f524f4c45000000000000000000000000000000000000000000815250600b019050604051809103902081565b61127c6000808481526020019081526020016000206002015461127761139f565b611032565b6112d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806125496030913960400191505060405180910390fd5b6112db82826119b0565b5050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60405180807f5041555345525f524f4c45000000000000000000000000000000000000000000815250600b019050604051809103902081565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561142d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806126416024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806125016022913960400191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061261c6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806124546023913960400191505060405180910390fd5b6116b58383836120bc565b6117218160405180606001604052806026815260200161252360269139600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118639092919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117b681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a4390919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611910576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118d55780820151818401526020810190506118ba565b50505050905090810190601f1680156119025780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b611944816000808581526020019081526020016000206000016120cc90919063ffffffff16565b156119ac5761195161139f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6119d7816000808581526020019081526020016000206000016120fc90919063ffffffff16565b15611a3f576119e461139f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080828401905083811015611ac1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b611ad3610e9a565b611b45576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600660016101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611b8961139f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611c7b600083836120bc565b611c9081600354611a4390919063ffffffff16565b600381905550611ce881600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a4390919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e1b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806125fb6021913960400191505060405180910390fd5b611e27826000836120bc565b611e93816040518060600160405280602281526020016124a660229139600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118639092919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611eeb8160035461212c90919063ffffffff16565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611f63610e9a565b15611fd6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600660016101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861201a61139f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600061206c83600001836121af565b60001c905092915050565b600061209f836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612232565b905092915050565b60006120b582600001612255565b9050919050565b6120c7838383612266565b505050565b60006120f4836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6122d4565b905092915050565b6000612124836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612344565b905092915050565b6000828211156121a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b600081836000018054905011612210576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806124326022913960400191505060405180910390fd5b82600001828154811061221f57fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b61227183838361242c565b612279610e9a565b156122cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806126f0602a913960400191505060405180910390fd5b505050565b60006122e08383612232565b61233957826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061233e565b600090505b92915050565b60008083600101600084815260200190815260200160002054905060008114612420576000600182039050600060018660000180549050039050600086600001828154811061238f57fe5b90600052602060002001549050808760000184815481106123ac57fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806123e457fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612426565b60009150505b92915050565b50505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e647345524332303a207472616e7366657220746f20746865207a65726f2061646472657373416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e7445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e706175736545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332305072657365744d696e7465725061757365723a206d7573742068617665206d696e74657220726f6c6520746f206d696e7445524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20706175736545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c6645524332305061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564a26469706673582212200d1861a2ec59a17e110f1b0443e4520bc1b677f2169bca86d324bc11bb72194464736f6c63430006060033",
  "deployedBytecode": "0x608060405234801561001057600080fd5b50600436106101a95760003560e01c806370a08231116100f9578063a457c2d711610097578063d539139311610071578063d539139314610888578063d547741f146108a6578063dd62ed3e146108f4578063e63ab1e91461096c576101a9565b8063a457c2d71461077a578063a9059cbb146107e0578063ca15c87314610846576101a9565b80639010d07c116100d35780639010d07c146105fb57806391d148541461067357806395d89b41146106d9578063a217fddf1461075c576101a9565b806370a082311461054b57806379cc6790146105a35780638456cb59146105f1576101a9565b8063313ce567116101665780633f4ba83a116101405780633f4ba83a146104a357806340c10f19146104ad57806342966c68146104fb5780635c975abb14610529576101a9565b8063313ce567146103cb57806336568abe146103ef578063395093511461043d576101a9565b806306fdde03146101ae578063095ea7b31461023157806318160ddd1461029757806323b872dd146102b5578063248a9ca31461033b5780632f2ff15d1461037d575b600080fd5b6101b661098a565b6040518080602001828103825283818151815260200191508051906020019080838360005b838110156101f65780820151818401526020810190506101db565b50505050905090810190601f1680156102235780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b61027d6004803603604081101561024757600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a2c565b604051808215151515815260200191505060405180910390f35b61029f610a4a565b6040518082815260200191505060405180910390f35b610321600480360360608110156102cb57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610a54565b604051808215151515815260200191505060405180910390f35b6103676004803603602081101561035157600080fd5b8101908080359060200190929190505050610b2d565b6040518082815260200191505060405180910390f35b6103c96004803603604081101561039357600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610b4c565b005b6103d3610bd5565b604051808260ff1660ff16815260200191505060405180910390f35b61043b6004803603604081101561040557600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610bec565b005b6104896004803603604081101561045357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610c85565b604051808215151515815260200191505060405180910390f35b6104ab610d38565b005b6104f9600480360360408110156104c357600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610ddd565b005b6105276004803603602081101561051157600080fd5b8101908080359060200190929190505050610e86565b005b610531610e9a565b604051808215151515815260200191505060405180910390f35b61058d6004803603602081101561056157600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610eb1565b6040518082815260200191505060405180910390f35b6105ef600480360360408110156105b957600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610efa565b005b6105f9610f5c565b005b6106316004803603604081101561061157600080fd5b810190808035906020019092919080359060200190929190505050611001565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b6106bf6004803603604081101561068957600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611032565b604051808215151515815260200191505060405180910390f35b6106e1611063565b6040518080602001828103825283818151815260200191508051906020019080838360005b83811015610721578082015181840152602081019050610706565b50505050905090810190601f16801561074e5780820380516001836020036101000a031916815260200191505b509250505060405180910390f35b610764611105565b6040518082815260200191505060405180910390f35b6107c66004803603604081101561079057600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff1690602001909291908035906020019092919050505061110c565b604051808215151515815260200191505060405180910390f35b61082c600480360360408110156107f657600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803590602001909291905050506111d9565b604051808215151515815260200191505060405180910390f35b6108726004803603602081101561085c57600080fd5b81019080803590602001909291905050506111f7565b6040518082815260200191505060405180910390f35b61089061121d565b6040518082815260200191505060405180910390f35b6108f2600480360360408110156108bc57600080fd5b8101908080359060200190929190803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611256565b005b6109566004803603604081101561090a57600080fd5b81019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190803573ffffffffffffffffffffffffffffffffffffffff1690602001909291905050506112df565b6040518082815260200191505060405180910390f35b610974611366565b6040518082815260200191505060405180910390f35b606060048054600181600116156101000203166002900480601f016020809104026020016040519081016040528092919081815260200182805460018160011615610100020316600290048015610a225780601f106109f757610100808354040283529160200191610a22565b820191906000526020600020905b815481529060010190602001808311610a0557829003601f168201915b5050505050905090565b6000610a40610a3961139f565b84846113a7565b6001905092915050565b6000600354905090565b6000610a6184848461159e565b610b2284610a6d61139f565b610b1d8560405180606001604052806028815260200161257960289139600260008b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000206000610ad361139f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118639092919063ffffffff16565b6113a7565b600190509392505050565b6000806000838152602001908152602001600020600201549050919050565b610b7260008084815260200190815260200160002060020154610b6d61139f565b611032565b610bc7576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f815260200180612477602f913960400191505060405180910390fd5b610bd1828261191d565b5050565b6000600660009054906101000a900460ff16905090565b610bf461139f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1614610c77576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602f8152602001806126c1602f913960400191505060405180910390fd5b610c8182826119b0565b5050565b6000610d2e610c9261139f565b84610d298560026000610ca361139f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008973ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a4390919063ffffffff16565b6113a7565b6001905092915050565b610d7e60405180807f5041555345525f524f4c45000000000000000000000000000000000000000000815250600b0190506040518091039020610d7961139f565b611032565b610dd3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260398152602001806124c86039913960400191505060405180910390fd5b610ddb611acb565b565b610e2360405180807f4d494e5445525f524f4c45000000000000000000000000000000000000000000815250600b0190506040518091039020610e1e61139f565b611032565b610e78576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260368152602001806125a16036913960400191505060405180910390fd5b610e828282611bcc565b5050565b610e97610e9161139f565b82611d95565b50565b6000600660019054906101000a900460ff16905090565b6000600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020549050919050565b6000610f39826040518060600160405280602481526020016125d760249139610f2a86610f2561139f565b6112df565b6118639092919063ffffffff16565b9050610f4d83610f4761139f565b836113a7565b610f578383611d95565b505050565b610fa260405180807f5041555345525f524f4c45000000000000000000000000000000000000000000815250600b0190506040518091039020610f9d61139f565b611032565b610ff7576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260378152602001806126656037913960400191505060405180910390fd5b610fff611f5b565b565b600061102a8260008086815260200190815260200160002060000161205d90919063ffffffff16565b905092915050565b600061105b8260008086815260200190815260200160002060000161207790919063ffffffff16565b905092915050565b606060058054600181600116156101000203166002900480601f0160208091040260200160405190810160405280929190818152602001828054600181600116156101000203166002900480156110fb5780601f106110d0576101008083540402835291602001916110fb565b820191906000526020600020905b8154815290600101906020018083116110de57829003601f168201915b5050505050905090565b6000801b81565b60006111cf61111961139f565b846111ca8560405180606001604052806025815260200161269c602591396002600061114361139f565b73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008a73ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118639092919063ffffffff16565b6113a7565b6001905092915050565b60006111ed6111e661139f565b848461159e565b6001905092915050565b60006112166000808481526020019081526020016000206000016120a7565b9050919050565b60405180807f4d494e5445525f524f4c45000000000000000000000000000000000000000000815250600b019050604051809103902081565b61127c6000808481526020019081526020016000206002015461127761139f565b611032565b6112d1576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260308152602001806125496030913960400191505060405180910390fd5b6112db82826119b0565b5050565b6000600260008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905092915050565b60405180807f5041555345525f524f4c45000000000000000000000000000000000000000000815250600b019050604051809103902081565b600033905090565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff16141561142d576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260248152602001806126416024913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156114b3576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806125016022913960400191505060405180910390fd5b80600260008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925836040518082815260200191505060405180910390a3505050565b600073ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff161415611624576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602581526020018061261c6025913960400191505060405180910390fd5b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff1614156116aa576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260238152602001806124546023913960400191505060405180910390fd5b6116b58383836120bc565b6117218160405180606001604052806026815260200161252360269139600160008773ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118639092919063ffffffff16565b600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055506117b681600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a4390919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff168373ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a3505050565b6000838311158290611910576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156118d55780820151818401526020810190506118ba565b50505050905090810190601f1680156119025780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5082840390509392505050565b611944816000808581526020019081526020016000206000016120cc90919063ffffffff16565b156119ac5761195161139f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837f2f8788117e7eff1d82e926ec794901d17c78024a50270940304540a733656f0d60405160405180910390a45b5050565b6119d7816000808581526020019081526020016000206000016120fc90919063ffffffff16565b15611a3f576119e461139f565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff16837ff6391f5c32d9c69d2a47ea670b442974b53935d1edc7fd64eb21e047a839171b60405160405180910390a45b5050565b600080828401905083811015611ac1576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601b8152602001807f536166654d6174683a206164646974696f6e206f766572666c6f77000000000081525060200191505060405180910390fd5b8091505092915050565b611ad3610e9a565b611b45576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260148152602001807f5061757361626c653a206e6f742070617573656400000000000000000000000081525060200191505060405180910390fd5b6000600660016101000a81548160ff0219169083151502179055507f5db9ee0a495bf2e6ff9c91a7834c1ba4fdd244a5e8aa4e537bd38aeae4b073aa611b8961139f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611c6f576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601f8152602001807f45524332303a206d696e7420746f20746865207a65726f20616464726573730081525060200191505060405180910390fd5b611c7b600083836120bc565b611c9081600354611a4390919063ffffffff16565b600381905550611ce881600160008573ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054611a4390919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020819055508173ffffffffffffffffffffffffffffffffffffffff16600073ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff161415611e1b576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260218152602001806125fb6021913960400191505060405180910390fd5b611e27826000836120bc565b611e93816040518060600160405280602281526020016124a660229139600160008673ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff168152602001908152602001600020546118639092919063ffffffff16565b600160008473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002081905550611eeb8160035461212c90919063ffffffff16565b600381905550600073ffffffffffffffffffffffffffffffffffffffff168273ffffffffffffffffffffffffffffffffffffffff167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef836040518082815260200191505060405180910390a35050565b611f63610e9a565b15611fd6576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260108152602001807f5061757361626c653a207061757365640000000000000000000000000000000081525060200191505060405180910390fd5b6001600660016101000a81548160ff0219169083151502179055507f62e78cea01bee320cd4e420270b5ea74000d11b0c9f74754ebdbfc544b05a25861201a61139f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a1565b600061206c83600001836121af565b60001c905092915050565b600061209f836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612232565b905092915050565b60006120b582600001612255565b9050919050565b6120c7838383612266565b505050565b60006120f4836000018373ffffffffffffffffffffffffffffffffffffffff1660001b6122d4565b905092915050565b6000612124836000018373ffffffffffffffffffffffffffffffffffffffff1660001b612344565b905092915050565b6000828211156121a4576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252601e8152602001807f536166654d6174683a207375627472616374696f6e206f766572666c6f77000081525060200191505060405180910390fd5b818303905092915050565b600081836000018054905011612210576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806124326022913960400191505060405180910390fd5b82600001828154811061221f57fe5b9060005260206000200154905092915050565b600080836001016000848152602001908152602001600020541415905092915050565b600081600001805490509050919050565b61227183838361242c565b612279610e9a565b156122cf576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602a8152602001806126f0602a913960400191505060405180910390fd5b505050565b60006122e08383612232565b61233957826000018290806001815401808255809150506001900390600052602060002001600090919091909150558260000180549050836001016000848152602001908152602001600020819055506001905061233e565b600090505b92915050565b60008083600101600084815260200190815260200160002054905060008114612420576000600182039050600060018660000180549050039050600086600001828154811061238f57fe5b90600052602060002001549050808760000184815481106123ac57fe5b90600052602060002001819055506001830187600101600083815260200190815260200160002081905550866000018054806123e457fe5b60019003818190600052602060002001600090559055866001016000878152602001908152602001600020600090556001945050505050612426565b60009150505b92915050565b50505056fe456e756d657261626c655365743a20696e646578206f7574206f6620626f756e647345524332303a207472616e7366657220746f20746865207a65726f2061646472657373416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f206772616e7445524332303a206275726e20616d6f756e7420657863656564732062616c616e636545524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e706175736545524332303a20617070726f766520746f20746865207a65726f206164647265737345524332303a207472616e7366657220616d6f756e7420657863656564732062616c616e6365416363657373436f6e74726f6c3a2073656e646572206d75737420626520616e2061646d696e20746f207265766f6b6545524332303a207472616e7366657220616d6f756e74206578636565647320616c6c6f77616e636545524332305072657365744d696e7465725061757365723a206d7573742068617665206d696e74657220726f6c6520746f206d696e7445524332303a206275726e20616d6f756e74206578636565647320616c6c6f77616e636545524332303a206275726e2066726f6d20746865207a65726f206164647265737345524332303a207472616e736665722066726f6d20746865207a65726f206164647265737345524332303a20617070726f76652066726f6d20746865207a65726f206164647265737345524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20706175736545524332303a2064656372656173656420616c6c6f77616e63652062656c6f77207a65726f416363657373436f6e74726f6c3a2063616e206f6e6c792072656e6f756e636520726f6c657320666f722073656c6645524332305061757361626c653a20746f6b656e207472616e73666572207768696c6520706175736564a26469706673582212200d1861a2ec59a17e110f1b0443e4520bc1b677f2169bca86d324bc11bb72194464736f6c63430006060033",
  "immutableReferences": {},
  "sourceMap": "824:1980:2:-:0;;;1233:237;5:9:-1;2:2;;;27:1;24;17:12;2:2;1233:237:2;;;;;;;;;;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;1233:237:2;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;1233:237:2;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1233:237:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;19:11:-1;14:3;11:20;8:2;;;44:1;41;34:12;8:2;71:11;66:3;62:21;55:28;;123:4;118:3;114:14;159:9;141:16;138:31;135:2;;;182:1;179;172:12;135:2;219:3;213:10;330:9;325:1;311:12;307:20;289:16;285:43;282:58;261:11;247:12;244:29;233:115;230:2;;;361:1;358;351:12;230:2;384:12;379:3;372:25;420:4;415:3;411:14;404:21;;0:432;;1233:237:2;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;1233:237:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1300:4;1306:6;2040:5:3;2032;:13;;;;;;;;;;;;:::i;:::-;;2065:7;2055;:17;;;;;;;;;;;;:::i;:::-;;2094:2;2082:9;;:14;;;;;;;;;;;;;;;;;;1958:145;;945:5:10;935:7;;:15;;;;;;;;;;;;;;;;;;1324:44:2::1;1772:4:0;1335:18:2::0;::::1;1355:12;:10;;;:12;;:::i;:::-;1324:10;;;:44;;:::i;:::-;1379:37;957:24;;;;;;;::::0;::::1;;;;;;;;;;;1403:12;:10;;;:12;;:::i;:::-;1379:10;;;:37;;:::i;:::-;1426;1025:24;;;;;;;::::0;::::1;;;;;;;;;;;1450:12;:10;;;:12;;:::i;:::-;1426:10;;;:37;;:::i;:::-;1233:237:::0;;824:1980;;598:104:8;651:15;685:10;678:17;;598:104;:::o;6588:110:0:-;6666:25;6677:4;6683:7;6666:10;;;:25;;:::i;:::-;6588:110;;:::o;7025:184::-;7098:33;7123:7;7098:6;:12;7105:4;7098:12;;;;;;;;;;;:20;;:24;;;;;;:33;;;;:::i;:::-;7094:109;;;7179:12;:10;;;:12;;:::i;:::-;7152:40;;7170:7;7152:40;;7164:4;7152:40;;;;;;;;;;7094:109;7025:184;;:::o;6429:150:9:-;6499:4;6522:50;6527:3;:10;;6563:5;6547:23;;6539:32;;6522:4;;;:50;;:::i;:::-;6515:57;;6429:150;;;;:::o;1640:404::-;1703:4;1724:21;1734:3;1739:5;1724:9;;;:21;;:::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:9;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;3805:127::-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;824:1980:2:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;:::-;;;;;;;",
  "deployedSourceMap": "824:1980:2:-:0;;;;5:9:-1;2:2;;;27:1;24;17:12;2:2;824:1980:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;12:1:-1;9;2:12;2168:89:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2168:89:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4244:166;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4244:166:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3235:106;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4877:317;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4877:317:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;4282:112:0;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4282:112:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;4644:223;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;4644:223:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3086:89:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;5818:205:0;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5818:205:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;5589:215:3;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5589:215:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2440:175:2;;;:::i;:::-;;1659:202;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;1659:202:2;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;524:89:4;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;524:89:4;;;;;;;;;;;;;;;;;:::i;:::-;;1052:84:10;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3399:125:3;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;3399:125:3;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;919:290:4;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;919:290:4;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;2064:169:2;;;:::i;:::-;;3965:136:0;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;3965:136:0;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2950:137;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;2950:137:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;2370:93:3;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2370:93:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1727:49:0;;;:::i;:::-;;;;;;;;;;;;;;;;;;;6291:266:3;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;6291:266:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3727:172;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;3727:172:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;3255:125:0;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;3255:125:0;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;919:62:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;5101:226:0;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;5101:226:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;3957:149:3;;;;;;15:2:-1;10:3;7:11;4:2;;;31:1;28;21:12;4:2;3957:149:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;987:62:2;;;:::i;:::-;;;;;;;;;;;;;;;;;;;2168:89:3;2213:13;2245:5;2238:12;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2168:89;:::o;4244:166::-;4327:4;4343:39;4352:12;:10;:12::i;:::-;4366:7;4375:6;4343:8;:39::i;:::-;4399:4;4392:11;;4244:166;;;;:::o;3235:106::-;3296:7;3322:12;;3315:19;;3235:106;:::o;4877:317::-;4983:4;4999:36;5009:6;5017:9;5028:6;4999:9;:36::i;:::-;5045:121;5054:6;5062:12;:10;:12::i;:::-;5076:89;5114:6;5076:89;;;;;;;;;;;;;;;;;:11;:19;5088:6;5076:19;;;;;;;;;;;;;;;:33;5096:12;:10;:12::i;:::-;5076:33;;;;;;;;;;;;;;;;:37;;:89;;;;;:::i;:::-;5045:8;:121::i;:::-;5183:4;5176:11;;4877:317;;;;;:::o;4282:112:0:-;4339:7;4365:6;:12;4372:4;4365:12;;;;;;;;;;;:22;;;4358:29;;4282:112;;;:::o;4644:223::-;4727:45;4735:6;:12;4742:4;4735:12;;;;;;;;;;;:22;;;4759:12;:10;:12::i;:::-;4727:7;:45::i;:::-;4719:105;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4835:25;4846:4;4852:7;4835:10;:25::i;:::-;4644:223;;:::o;3086:89:3:-;3135:5;3159:9;;;;;;;;;;;3152:16;;3086:89;:::o;5818:205:0:-;5915:12;:10;:12::i;:::-;5904:23;;:7;:23;;;5896:83;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5990:26;6002:4;6008:7;5990:11;:26::i;:::-;5818:205;;:::o;5589:215:3:-;5677:4;5693:83;5702:12;:10;:12::i;:::-;5716:7;5725:50;5764:10;5725:11;:25;5737:12;:10;:12::i;:::-;5725:25;;;;;;;;;;;;;;;:34;5751:7;5725:34;;;;;;;;;;;;;;;;:38;;:50;;;;:::i;:::-;5693:8;:83::i;:::-;5793:4;5786:11;;5589:215;;;;:::o;2440:175:2:-;2492:34;1025:24;;;;;;;;;;;;;;;;;;;2513:12;:10;:12::i;:::-;2492:7;:34::i;:::-;2484:104;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2598:10;:8;:10::i;:::-;2440:175::o;1659:202::-;1734:34;957:24;;;;;;;;;;;;;;;;;;;1755:12;:10;:12::i;:::-;1734:7;:34::i;:::-;1726:101;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1837:17;1843:2;1847:6;1837:5;:17::i;:::-;1659:202;;:::o;524:89:4:-;579:27;585:12;:10;:12::i;:::-;599:6;579:5;:27::i;:::-;524:89;:::o;1052:84:10:-;1099:4;1122:7;;;;;;;;;;;1115:14;;1052:84;:::o;3399:125:3:-;3473:7;3499:9;:18;3509:7;3499:18;;;;;;;;;;;;;;;;3492:25;;3399:125;;;:::o;919:290:4:-;995:26;1024:84;1061:6;1024:84;;;;;;;;;;;;;;;;;:32;1034:7;1043:12;:10;:12::i;:::-;1024:9;:32::i;:::-;:36;;:84;;;;;:::i;:::-;995:113;;1119:51;1128:7;1137:12;:10;:12::i;:::-;1151:18;1119:8;:51::i;:::-;1180:22;1186:7;1195:6;1180:5;:22::i;:::-;919:290;;;:::o;2064:169:2:-;2114:34;1025:24;;;;;;;;;;;;;;;;;;;2135:12;:10;:12::i;:::-;2114:7;:34::i;:::-;2106:102;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2218:8;:6;:8::i;:::-;2064:169::o;3965:136:0:-;4038:7;4064:30;4088:5;4064:6;:12;4071:4;4064:12;;;;;;;;;;;:20;;:23;;:30;;;;:::i;:::-;4057:37;;3965:136;;;;:::o;2950:137::-;3019:4;3042:38;3072:7;3042:6;:12;3049:4;3042:12;;;;;;;;;;;:20;;:29;;:38;;;;:::i;:::-;3035:45;;2950:137;;;;:::o;2370:93:3:-;2417:13;2449:7;2442:14;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2370:93;:::o;1727:49:0:-;1772:4;1727:49;;;:::o;6291:266:3:-;6384:4;6400:129;6409:12;:10;:12::i;:::-;6423:7;6432:96;6471:15;6432:96;;;;;;;;;;;;;;;;;:11;:25;6444:12;:10;:12::i;:::-;6432:25;;;;;;;;;;;;;;;:34;6458:7;6432:34;;;;;;;;;;;;;;;;:38;;:96;;;;;:::i;:::-;6400:8;:129::i;:::-;6546:4;6539:11;;6291:266;;;;:::o;3727:172::-;3813:4;3829:42;3839:12;:10;:12::i;:::-;3853:9;3864:6;3829:9;:42::i;:::-;3888:4;3881:11;;3727:172;;;;:::o;3255:125:0:-;3318:7;3344:29;:6;:12;3351:4;3344:12;;;;;;;;;;;:20;;:27;:29::i;:::-;3337:36;;3255:125;;;:::o;919:62:2:-;957:24;;;;;;;;;;;;;;;;;;;919:62;:::o;5101:226:0:-;5185:45;5193:6;:12;5200:4;5193:12;;;;;;;;;;;:22;;;5217:12;:10;:12::i;:::-;5185:7;:45::i;:::-;5177:106;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5294:26;5306:4;5312:7;5294:11;:26::i;:::-;5101:226;;:::o;3957:149:3:-;4046:7;4072:11;:18;4084:5;4072:18;;;;;;;;;;;;;;;:27;4091:7;4072:27;;;;;;;;;;;;;;;;4065:34;;3957:149;;;;:::o;987:62:2:-;1025:24;;;;;;;;;;;;;;;;;;;987:62;:::o;598:104:8:-;651:15;685:10;678:17;;598:104;:::o;9355:340:3:-;9473:1;9456:19;;:5;:19;;;;9448:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9553:1;9534:21;;:7;:21;;;;9526:68;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;9635:6;9605:11;:18;9617:5;9605:18;;;;;;;;;;;;;;;:27;9624:7;9605:27;;;;;;;;;;;;;;;:36;;;;9672:7;9656:32;;9665:5;9656:32;;;9681:6;9656:32;;;;;;;;;;;;;;;;;;9355:340;;;:::o;7031:530::-;7154:1;7136:20;;:6;:20;;;;7128:70;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7237:1;7216:23;;:9;:23;;;;7208:71;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7290:47;7311:6;7319:9;7330:6;7290:20;:47::i;:::-;7368:71;7390:6;7368:71;;;;;;;;;;;;;;;;;:9;:17;7378:6;7368:17;;;;;;;;;;;;;;;;:21;;:71;;;;;:::i;:::-;7348:9;:17;7358:6;7348:17;;;;;;;;;;;;;;;:91;;;;7472:32;7497:6;7472:9;:20;7482:9;7472:20;;;;;;;;;;;;;;;;:24;;:32;;;;:::i;:::-;7449:9;:20;7459:9;7449:20;;;;;;;;;;;;;;;:55;;;;7536:9;7519:35;;7528:6;7519:35;;;7547:6;7519:35;;;;;;;;;;;;;;;;;;7031:530;;;:::o;5432:163:1:-;5518:7;5550:1;5545;:6;;5553:12;5537:29;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5537:29:1;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5587:1;5583;:5;5576:12;;5432:163;;;;;:::o;7025:184:0:-;7098:33;7123:7;7098:6;:12;7105:4;7098:12;;;;;;;;;;;:20;;:24;;:33;;;;:::i;:::-;7094:109;;;7179:12;:10;:12::i;:::-;7152:40;;7170:7;7152:40;;7164:4;7152:40;;;;;;;;;;7094:109;7025:184;;:::o;7215:188::-;7289:36;7317:7;7289:6;:12;7296:4;7289:12;;;;;;;;;;;:20;;:27;;:36;;;;:::i;:::-;7285:112;;;7373:12;:10;:12::i;:::-;7346:40;;7364:7;7346:40;;7358:4;7346:40;;;;;;;;;;7285:112;7215:188;;:::o;2690:175:1:-;2748:7;2767:9;2783:1;2779;:5;2767:17;;2807:1;2802;:6;;2794:46;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2857:1;2850:8;;;2690:175;;;;:::o;2064:117:10:-;1631:8;:6;:8::i;:::-;1623:41;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2132:5:::1;2122:7;;:15;;;;;;;;;;;;;;;;;;2152:22;2161:12;:10;:12::i;:::-;2152:22;;;;;;;;;;;;;;;;;;;;;;2064:117::o:0;7832:370:3:-;7934:1;7915:21;;:7;:21;;;;7907:65;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;7983:49;8012:1;8016:7;8025:6;7983:20;:49::i;:::-;8058:24;8075:6;8058:12;;:16;;:24;;;;:::i;:::-;8043:12;:39;;;;8113:30;8136:6;8113:9;:18;8123:7;8113:18;;;;;;;;;;;;;;;;:22;;:30;;;;:::i;:::-;8092:9;:18;8102:7;8092:18;;;;;;;;;;;;;;;:51;;;;8179:7;8158:37;;8175:1;8158:37;;;8188:6;8158:37;;;;;;;;;;;;;;;;;;7832:370;;:::o;8522:410::-;8624:1;8605:21;;:7;:21;;;;8597:67;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;8675:49;8696:7;8713:1;8717:6;8675:20;:49::i;:::-;8756:68;8779:6;8756:68;;;;;;;;;;;;;;;;;:9;:18;8766:7;8756:18;;;;;;;;;;;;;;;;:22;;:68;;;;;:::i;:::-;8735:9;:18;8745:7;8735:18;;;;;;;;;;;;;;;:89;;;;8849:24;8866:6;8849:12;;:16;;:24;;;;:::i;:::-;8834:12;:39;;;;8914:1;8888:37;;8897:7;8888:37;;;8918:6;8888:37;;;;;;;;;;;;;;;;;;8522:410;;:::o;1817:115:10:-;1366:8;:6;:8::i;:::-;1365:9;1357:38;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1886:4:::1;1876:7;;:14;;;;;;;;;;;;;;;;;;1905:20;1912:12;:10;:12::i;:::-;1905:20;;;;;;;;;;;;;;;;;;;;;;1817:115::o:0;7677:156:9:-;7751:7;7801:22;7805:3;:10;;7817:5;7801:3;:22::i;:::-;7793:31;;7770:56;;7677:156;;;;:::o;6984:165::-;7064:4;7087:55;7097:3;:10;;7133:5;7117:23;;7109:32;;7087:9;:55::i;:::-;7080:62;;6984:165;;;;:::o;7230:115::-;7293:7;7319:19;7327:3;:10;;7319:7;:19::i;:::-;7312:26;;7230:115;;;:::o;2621:181:2:-;2751:44;2778:4;2784:2;2788:6;2751:26;:44::i;:::-;2621:181;;;:::o;6429:150:9:-;6499:4;6522:50;6527:3;:10;;6563:5;6547:23;;6539:32;;6522:4;:50::i;:::-;6515:57;;6429:150;;;;:::o;6747:156::-;6820:4;6843:53;6851:3;:10;;6887:5;6871:23;;6863:32;;6843:7;:53::i;:::-;6836:60;;6747:156;;;;:::o;3136:155:1:-;3194:7;3226:1;3221;:6;;3213:49;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3283:1;3279;:5;3272:12;;3136:155;;;;:::o;4452:201:9:-;4519:7;4567:5;4546:3;:11;;:18;;;;:26;4538:73;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4628:3;:11;;4640:5;4628:18;;;;;;;;;;;;;;;;4621:25;;4452:201;;;;:::o;3805:127::-;3878:4;3924:1;3901:3;:12;;:19;3914:5;3901:19;;;;;;;;;;;;:24;;3894:31;;3805:127;;;;:::o;4013:107::-;4069:7;4095:3;:11;;:18;;;;4088:25;;4013:107;;;:::o;590:234:5:-;698:44;725:4;731:2;735:6;698:26;:44::i;:::-;762:8;:6;:8::i;:::-;761:9;753:64;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;590:234;;;:::o;1640:404:9:-;1703:4;1724:21;1734:3;1739:5;1724:9;:21::i;:::-;1719:319;;1761:3;:11;;1778:5;1761:23;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;1761:23:9;;;;;;;;;;;;;;;;;;;1941:3;:11;;:18;;;;1919:3;:12;;:19;1932:5;1919:19;;;;;;;;;;;:40;;;;1980:4;1973:11;;;;1719:319;2022:5;2015:12;;1640:404;;;;;:::o;2212:1512::-;2278:4;2394:18;2415:3;:12;;:19;2428:5;2415:19;;;;;;;;;;;;2394:40;;2463:1;2449:10;:15;2445:1273;;2806:21;2843:1;2830:10;:14;2806:38;;2858:17;2899:1;2878:3;:11;;:18;;;;:22;2858:42;;3140:17;3160:3;:11;;3172:9;3160:22;;;;;;;;;;;;;;;;3140:42;;3303:9;3274:3;:11;;3286:13;3274:26;;;;;;;;;;;;;;;:38;;;;3420:1;3404:13;:17;3378:3;:12;;:23;3391:9;3378:23;;;;;;;;;;;:43;;;;3527:3;:11;;:17;;;;;;;;;;;;;;;;;;;;;;;;3619:3;:12;;:19;3632:5;3619:19;;;;;;;;;;;3612:26;;;3660:4;3653:11;;;;;;;;2445:1273;3702:5;3695:12;;;2212:1512;;;;;:::o;10701:92:3:-;;;;:::o",
  "source": "// SPDX-License-Identifier: MIT\n\npragma solidity >=0.6.0 <0.8.0;\n\nimport \"../access/AccessControl.sol\";\nimport \"../utils/Context.sol\";\nimport \"../token/ERC20/ERC20.sol\";\nimport \"../token/ERC20/ERC20Burnable.sol\";\nimport \"../token/ERC20/ERC20Pausable.sol\";\n\n/**\n * @dev {ERC20} token, including:\n *\n *  - ability for holders to burn (destroy) their tokens\n *  - a minter role that allows for token minting (creation)\n *  - a pauser role that allows to stop all token transfers\n *\n * This contract uses {AccessControl} to lock permissioned functions using the\n * different roles - head to its documentation for details.\n *\n * The account that deploys the contract will be granted the minter and pauser\n * roles, as well as the default admin role, which will let it grant both minter\n * and pauser roles to other accounts.\n */\ncontract ERC20PresetMinterPauser is Context, AccessControl, ERC20Burnable, ERC20Pausable {\n    bytes32 public constant MINTER_ROLE = keccak256(\"MINTER_ROLE\");\n    bytes32 public constant PAUSER_ROLE = keccak256(\"PAUSER_ROLE\");\n\n    /**\n     * @dev Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE` and `PAUSER_ROLE` to the\n     * account that deploys the contract.\n     *\n     * See {ERC20-constructor}.\n     */\n    constructor(string memory name, string memory symbol) public ERC20(name, symbol) {\n        _setupRole(DEFAULT_ADMIN_ROLE, _msgSender());\n\n        _setupRole(MINTER_ROLE, _msgSender());\n        _setupRole(PAUSER_ROLE, _msgSender());\n    }\n\n    /**\n     * @dev Creates `amount` new tokens for `to`.\n     *\n     * See {ERC20-_mint}.\n     *\n     * Requirements:\n     *\n     * - the caller must have the `MINTER_ROLE`.\n     */\n    function mint(address to, uint256 amount) public virtual {\n        require(hasRole(MINTER_ROLE, _msgSender()), \"ERC20PresetMinterPauser: must have minter role to mint\");\n        _mint(to, amount);\n    }\n\n    /**\n     * @dev Pauses all token transfers.\n     *\n     * See {ERC20Pausable} and {Pausable-_pause}.\n     *\n     * Requirements:\n     *\n     * - the caller must have the `PAUSER_ROLE`.\n     */\n    function pause() public virtual {\n        require(hasRole(PAUSER_ROLE, _msgSender()), \"ERC20PresetMinterPauser: must have pauser role to pause\");\n        _pause();\n    }\n\n    /**\n     * @dev Unpauses all token transfers.\n     *\n     * See {ERC20Pausable} and {Pausable-_unpause}.\n     *\n     * Requirements:\n     *\n     * - the caller must have the `PAUSER_ROLE`.\n     */\n    function unpause() public virtual {\n        require(hasRole(PAUSER_ROLE, _msgSender()), \"ERC20PresetMinterPauser: must have pauser role to unpause\");\n        _unpause();\n    }\n\n    function _beforeTokenTransfer(address from, address to, uint256 amount) internal virtual override(ERC20, ERC20Pausable) {\n        super._beforeTokenTransfer(from, to, amount);\n    }\n}\n",
  "sourcePath": "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol",
  "ast": {
    "absolutePath": "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol",
    "exportedSymbols": {
      "ERC20PresetMinterPauser": [
        773
      ]
    },
    "id": 774,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 639,
        "literals": [
          "solidity",
          ">=",
          "0.6",
          ".0",
          "<",
          "0.8",
          ".0"
        ],
        "nodeType": "PragmaDirective",
        "src": "33:31:2"
      },
      {
        "absolutePath": "@openzeppelin/contracts/access/AccessControl.sol",
        "file": "../access/AccessControl.sol",
        "id": 640,
        "nodeType": "ImportDirective",
        "scope": 774,
        "sourceUnit": 283,
        "src": "66:37:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/utils/Context.sol",
        "file": "../utils/Context.sol",
        "id": 641,
        "nodeType": "ImportDirective",
        "scope": 774,
        "sourceUnit": 1770,
        "src": "104:30:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
        "file": "../token/ERC20/ERC20.sol",
        "id": 642,
        "nodeType": "ImportDirective",
        "scope": 774,
        "sourceUnit": 1277,
        "src": "135:34:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol",
        "file": "../token/ERC20/ERC20Burnable.sol",
        "id": 643,
        "nodeType": "ImportDirective",
        "scope": 774,
        "sourceUnit": 1336,
        "src": "170:42:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20Pausable.sol",
        "file": "../token/ERC20/ERC20Pausable.sol",
        "id": 644,
        "nodeType": "ImportDirective",
        "scope": 774,
        "sourceUnit": 1373,
        "src": "213:42:2",
        "symbolAliases": [],
        "unitAlias": ""
      },
      {
        "abstract": false,
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 646,
              "name": "Context",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1769,
              "src": "860:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Context_$1769",
                "typeString": "contract Context"
              }
            },
            "id": 647,
            "nodeType": "InheritanceSpecifier",
            "src": "860:7:2"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 648,
              "name": "AccessControl",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 282,
              "src": "869:13:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_AccessControl_$282",
                "typeString": "contract AccessControl"
              }
            },
            "id": 649,
            "nodeType": "InheritanceSpecifier",
            "src": "869:13:2"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 650,
              "name": "ERC20Burnable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1335,
              "src": "884:13:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Burnable_$1335",
                "typeString": "contract ERC20Burnable"
              }
            },
            "id": 651,
            "nodeType": "InheritanceSpecifier",
            "src": "884:13:2"
          },
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 652,
              "name": "ERC20Pausable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 1372,
              "src": "899:13:2",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_ERC20Pausable_$1372",
                "typeString": "contract ERC20Pausable"
              }
            },
            "id": 653,
            "nodeType": "InheritanceSpecifier",
            "src": "899:13:2"
          }
        ],
        "contractDependencies": [
          282,
          1276,
          1335,
          1372,
          1450,
          1769,
          2353
        ],
        "contractKind": "contract",
        "documentation": {
          "id": 645,
          "nodeType": "StructuredDocumentation",
          "src": "257:566:2",
          "text": "@dev {ERC20} token, including:\n *  - ability for holders to burn (destroy) their tokens\n - a minter role that allows for token minting (creation)\n - a pauser role that allows to stop all token transfers\n * This contract uses {AccessControl} to lock permissioned functions using the\ndifferent roles - head to its documentation for details.\n * The account that deploys the contract will be granted the minter and pauser\nroles, as well as the default admin role, which will let it grant both minter\nand pauser roles to other accounts."
        },
        "fullyImplemented": true,
        "id": 773,
        "linearizedBaseContracts": [
          773,
          1372,
          2353,
          1335,
          1276,
          1450,
          282,
          1769
        ],
        "name": "ERC20PresetMinterPauser",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "functionSelector": "d5391393",
            "id": 658,
            "mutability": "constant",
            "name": "MINTER_ROLE",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 773,
            "src": "919:62:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 654,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "919:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "4d494e5445525f524f4c45",
                  "id": 656,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "967:13:2",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
                    "typeString": "literal_string \"MINTER_ROLE\""
                  },
                  "value": "MINTER_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
                    "typeString": "literal_string \"MINTER_ROLE\""
                  }
                ],
                "id": 655,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "957:9:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 657,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "957:24:2",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": true,
            "functionSelector": "e63ab1e9",
            "id": 663,
            "mutability": "constant",
            "name": "PAUSER_ROLE",
            "nodeType": "VariableDeclaration",
            "overrides": null,
            "scope": 773,
            "src": "987:62:2",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 659,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "987:7:2",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "hexValue": "5041555345525f524f4c45",
                  "id": 661,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "string",
                  "lValueRequested": false,
                  "nodeType": "Literal",
                  "src": "1035:13:2",
                  "subdenomination": null,
                  "typeDescriptions": {
                    "typeIdentifier": "t_stringliteral_65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a",
                    "typeString": "literal_string \"PAUSER_ROLE\""
                  },
                  "value": "PAUSER_ROLE"
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_stringliteral_65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a",
                    "typeString": "literal_string \"PAUSER_ROLE\""
                  }
                ],
                "id": 660,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": -8,
                "src": "1025:9:2",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_keccak256_pure$_t_bytes_memory_ptr_$returns$_t_bytes32_$",
                  "typeString": "function (bytes memory) pure returns (bytes32)"
                }
              },
              "id": 662,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1025:24:2",
              "tryCall": false,
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "body": {
              "id": 693,
              "nodeType": "Block",
              "src": "1314:156:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 676,
                        "name": "DEFAULT_ADMIN_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 25,
                        "src": "1335:18:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 677,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1757,
                          "src": "1355:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 678,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1355:12:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 675,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 208,
                      "src": "1324:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 679,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1324:44:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 680,
                  "nodeType": "ExpressionStatement",
                  "src": "1324:44:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 682,
                        "name": "MINTER_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 658,
                        "src": "1390:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 683,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1757,
                          "src": "1403:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 684,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1403:12:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 681,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 208,
                      "src": "1379:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 685,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1379:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 686,
                  "nodeType": "ExpressionStatement",
                  "src": "1379:37:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 688,
                        "name": "PAUSER_ROLE",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 663,
                        "src": "1437:11:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "arguments": [],
                        "expression": {
                          "argumentTypes": [],
                          "id": 689,
                          "name": "_msgSender",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1757,
                          "src": "1450:10:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                            "typeString": "function () view returns (address payable)"
                          }
                        },
                        "id": 690,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1450:12:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bytes32",
                          "typeString": "bytes32"
                        },
                        {
                          "typeIdentifier": "t_address_payable",
                          "typeString": "address payable"
                        }
                      ],
                      "id": 687,
                      "name": "_setupRole",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 208,
                      "src": "1426:10:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_bytes32_$_t_address_$returns$__$",
                        "typeString": "function (bytes32,address)"
                      }
                    },
                    "id": 691,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1426:37:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 692,
                  "nodeType": "ExpressionStatement",
                  "src": "1426:37:2"
                }
              ]
            },
            "documentation": {
              "id": 664,
              "nodeType": "StructuredDocumentation",
              "src": "1056:172:2",
              "text": "@dev Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE` and `PAUSER_ROLE` to the\naccount that deploys the contract.\n     * See {ERC20-constructor}."
            },
            "id": 694,
            "implemented": true,
            "kind": "constructor",
            "modifiers": [
              {
                "arguments": [
                  {
                    "argumentTypes": null,
                    "id": 671,
                    "name": "name",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 666,
                    "src": "1300:4:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  },
                  {
                    "argumentTypes": null,
                    "id": 672,
                    "name": "symbol",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 668,
                    "src": "1306:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_memory_ptr",
                      "typeString": "string memory"
                    }
                  }
                ],
                "id": 673,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 670,
                  "name": "ERC20",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 1276,
                  "src": "1294:5:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_type$_t_contract$_ERC20_$1276_$",
                    "typeString": "type(contract ERC20)"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1294:19:2"
              }
            ],
            "name": "",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 669,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 666,
                  "mutability": "mutable",
                  "name": "name",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 694,
                  "src": "1245:18:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 665,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1245:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 668,
                  "mutability": "mutable",
                  "name": "symbol",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 694,
                  "src": "1265:20:2",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_string_memory_ptr",
                    "typeString": "string"
                  },
                  "typeName": {
                    "id": 667,
                    "name": "string",
                    "nodeType": "ElementaryTypeName",
                    "src": "1265:6:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_string_storage_ptr",
                      "typeString": "string"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1244:42:2"
            },
            "returnParameters": {
              "id": 674,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1314:0:2"
            },
            "scope": 773,
            "src": "1233:237:2",
            "stateMutability": "nonpayable",
            "virtual": false,
            "visibility": "public"
          },
          {
            "body": {
              "id": 716,
              "nodeType": "Block",
              "src": "1716:145:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 704,
                            "name": "MINTER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 658,
                            "src": "1742:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 705,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1757,
                              "src": "1755:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                "typeString": "function () view returns (address payable)"
                              }
                            },
                            "id": 706,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "1755:12:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 703,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "1734:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 707,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "1734:34:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "45524332305072657365744d696e7465725061757365723a206d7573742068617665206d696e74657220726f6c6520746f206d696e74",
                        "id": 708,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "1770:56:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_9efa111136b49cf2058ce33f60fa04a5749fd87012d74cadc251e21e1db53342",
                          "typeString": "literal_string \"ERC20PresetMinterPauser: must have minter role to mint\""
                        },
                        "value": "ERC20PresetMinterPauser: must have minter role to mint"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_9efa111136b49cf2058ce33f60fa04a5749fd87012d74cadc251e21e1db53342",
                          "typeString": "literal_string \"ERC20PresetMinterPauser: must have minter role to mint\""
                        }
                      ],
                      "id": 702,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "1726:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 709,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1726:101:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 710,
                  "nodeType": "ExpressionStatement",
                  "src": "1726:101:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 712,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 697,
                        "src": "1843:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 713,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 699,
                        "src": "1847:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "id": 711,
                      "name": "_mint",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 1152,
                      "src": "1837:5:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,uint256)"
                      }
                    },
                    "id": 714,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1837:17:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 715,
                  "nodeType": "ExpressionStatement",
                  "src": "1837:17:2"
                }
              ]
            },
            "documentation": {
              "id": 695,
              "nodeType": "StructuredDocumentation",
              "src": "1476:178:2",
              "text": "@dev Creates `amount` new tokens for `to`.\n     * See {ERC20-_mint}.\n     * Requirements:\n     * - the caller must have the `MINTER_ROLE`."
            },
            "functionSelector": "40c10f19",
            "id": 717,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "mint",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 700,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 697,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 717,
                  "src": "1673:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 696,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1673:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 699,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 717,
                  "src": "1685:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 698,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "1685:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1672:28:2"
            },
            "returnParameters": {
              "id": 701,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1716:0:2"
            },
            "scope": 773,
            "src": "1659:202:2",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 733,
              "nodeType": "Block",
              "src": "2096:137:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 723,
                            "name": "PAUSER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 663,
                            "src": "2122:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 724,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1757,
                              "src": "2135:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                "typeString": "function () view returns (address payable)"
                              }
                            },
                            "id": 725,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2135:12:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 722,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "2114:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 726,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2114:34:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "45524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f207061757365",
                        "id": 727,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2150:57:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_d581fb23a6d539f3015b3485052424734f4b05014d1d5211f35a049cff57e330",
                          "typeString": "literal_string \"ERC20PresetMinterPauser: must have pauser role to pause\""
                        },
                        "value": "ERC20PresetMinterPauser: must have pauser role to pause"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_d581fb23a6d539f3015b3485052424734f4b05014d1d5211f35a049cff57e330",
                          "typeString": "literal_string \"ERC20PresetMinterPauser: must have pauser role to pause\""
                        }
                      ],
                      "id": 721,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2106:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 728,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2106:102:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 729,
                  "nodeType": "ExpressionStatement",
                  "src": "2106:102:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 730,
                      "name": "_pause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2336,
                      "src": "2218:6:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 731,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2218:8:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 732,
                  "nodeType": "ExpressionStatement",
                  "src": "2218:8:2"
                }
              ]
            },
            "documentation": {
              "id": 718,
              "nodeType": "StructuredDocumentation",
              "src": "1867:192:2",
              "text": "@dev Pauses all token transfers.\n     * See {ERC20Pausable} and {Pausable-_pause}.\n     * Requirements:\n     * - the caller must have the `PAUSER_ROLE`."
            },
            "functionSelector": "8456cb59",
            "id": 734,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "pause",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 719,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2078:2:2"
            },
            "returnParameters": {
              "id": 720,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2096:0:2"
            },
            "scope": 773,
            "src": "2064:169:2",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "body": {
              "id": 750,
              "nodeType": "Block",
              "src": "2474:141:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "arguments": [
                          {
                            "argumentTypes": null,
                            "id": 740,
                            "name": "PAUSER_ROLE",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 663,
                            "src": "2500:11:2",
                            "typeDescriptions": {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            }
                          },
                          {
                            "argumentTypes": null,
                            "arguments": [],
                            "expression": {
                              "argumentTypes": [],
                              "id": 741,
                              "name": "_msgSender",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 1757,
                              "src": "2513:10:2",
                              "typeDescriptions": {
                                "typeIdentifier": "t_function_internal_view$__$returns$_t_address_payable_$",
                                "typeString": "function () view returns (address payable)"
                              }
                            },
                            "id": 742,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": false,
                            "kind": "functionCall",
                            "lValueRequested": false,
                            "names": [],
                            "nodeType": "FunctionCall",
                            "src": "2513:12:2",
                            "tryCall": false,
                            "typeDescriptions": {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          }
                        ],
                        "expression": {
                          "argumentTypes": [
                            {
                              "typeIdentifier": "t_bytes32",
                              "typeString": "bytes32"
                            },
                            {
                              "typeIdentifier": "t_address_payable",
                              "typeString": "address payable"
                            }
                          ],
                          "id": 739,
                          "name": "hasRole",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 71,
                          "src": "2492:7:2",
                          "typeDescriptions": {
                            "typeIdentifier": "t_function_internal_view$_t_bytes32_$_t_address_$returns$_t_bool_$",
                            "typeString": "function (bytes32,address) view returns (bool)"
                          }
                        },
                        "id": 743,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "kind": "functionCall",
                        "lValueRequested": false,
                        "names": [],
                        "nodeType": "FunctionCall",
                        "src": "2492:34:2",
                        "tryCall": false,
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "hexValue": "45524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e7061757365",
                        "id": 744,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "kind": "string",
                        "lValueRequested": false,
                        "nodeType": "Literal",
                        "src": "2528:59:2",
                        "subdenomination": null,
                        "typeDescriptions": {
                          "typeIdentifier": "t_stringliteral_176e32c23b35bed3cd8ee309232e2364823f6f66078e0cf4f5b5e41eee016186",
                          "typeString": "literal_string \"ERC20PresetMinterPauser: must have pauser role to unpause\""
                        },
                        "value": "ERC20PresetMinterPauser: must have pauser role to unpause"
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_stringliteral_176e32c23b35bed3cd8ee309232e2364823f6f66078e0cf4f5b5e41eee016186",
                          "typeString": "literal_string \"ERC20PresetMinterPauser: must have pauser role to unpause\""
                        }
                      ],
                      "id": 738,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        -18,
                        -18
                      ],
                      "referencedDeclaration": -18,
                      "src": "2484:7:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 745,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2484:104:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 746,
                  "nodeType": "ExpressionStatement",
                  "src": "2484:104:2"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [],
                    "expression": {
                      "argumentTypes": [],
                      "id": 747,
                      "name": "_unpause",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 2352,
                      "src": "2598:8:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$__$returns$__$",
                        "typeString": "function ()"
                      }
                    },
                    "id": 748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2598:10:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 749,
                  "nodeType": "ExpressionStatement",
                  "src": "2598:10:2"
                }
              ]
            },
            "documentation": {
              "id": 735,
              "nodeType": "StructuredDocumentation",
              "src": "2239:196:2",
              "text": "@dev Unpauses all token transfers.\n     * See {ERC20Pausable} and {Pausable-_unpause}.\n     * Requirements:\n     * - the caller must have the `PAUSER_ROLE`."
            },
            "functionSelector": "3f4ba83a",
            "id": 751,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "unpause",
            "nodeType": "FunctionDefinition",
            "overrides": null,
            "parameters": {
              "id": 736,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2456:2:2"
            },
            "returnParameters": {
              "id": 737,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2474:0:2"
            },
            "scope": 773,
            "src": "2440:175:2",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "public"
          },
          {
            "baseFunctions": [
              1275,
              1371
            ],
            "body": {
              "id": 771,
              "nodeType": "Block",
              "src": "2741:61:2",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 766,
                        "name": "from",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 753,
                        "src": "2778:4:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 767,
                        "name": "to",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 755,
                        "src": "2784:2:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 768,
                        "name": "amount",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 757,
                        "src": "2788:6:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 763,
                        "name": "super",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": -25,
                        "src": "2751:5:2",
                        "typeDescriptions": {
                          "typeIdentifier": "t_super$_ERC20PresetMinterPauser_$773",
                          "typeString": "contract super ERC20PresetMinterPauser"
                        }
                      },
                      "id": 765,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "_beforeTokenTransfer",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": 1371,
                      "src": "2751:26:2",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$_t_address_$_t_uint256_$returns$__$",
                        "typeString": "function (address,address,uint256)"
                      }
                    },
                    "id": 769,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2751:44:2",
                    "tryCall": false,
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 770,
                  "nodeType": "ExpressionStatement",
                  "src": "2751:44:2"
                }
              ]
            },
            "documentation": null,
            "id": 772,
            "implemented": true,
            "kind": "function",
            "modifiers": [],
            "name": "_beforeTokenTransfer",
            "nodeType": "FunctionDefinition",
            "overrides": {
              "id": 761,
              "nodeType": "OverrideSpecifier",
              "overrides": [
                {
                  "contractScope": null,
                  "id": 759,
                  "name": "ERC20",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1276,
                  "src": "2719:5:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20_$1276",
                    "typeString": "contract ERC20"
                  }
                },
                {
                  "contractScope": null,
                  "id": 760,
                  "name": "ERC20Pausable",
                  "nodeType": "UserDefinedTypeName",
                  "referencedDeclaration": 1372,
                  "src": "2726:13:2",
                  "typeDescriptions": {
                    "typeIdentifier": "t_contract$_ERC20Pausable_$1372",
                    "typeString": "contract ERC20Pausable"
                  }
                }
              ],
              "src": "2710:30:2"
            },
            "parameters": {
              "id": 758,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 753,
                  "mutability": "mutable",
                  "name": "from",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 772,
                  "src": "2651:12:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 752,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2651:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 755,
                  "mutability": "mutable",
                  "name": "to",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 772,
                  "src": "2665:10:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 754,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2665:7:2",
                    "stateMutability": "nonpayable",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 757,
                  "mutability": "mutable",
                  "name": "amount",
                  "nodeType": "VariableDeclaration",
                  "overrides": null,
                  "scope": 772,
                  "src": "2677:14:2",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 756,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "2677:7:2",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2650:42:2"
            },
            "returnParameters": {
              "id": 762,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2741:0:2"
            },
            "scope": 773,
            "src": "2621:181:2",
            "stateMutability": "nonpayable",
            "virtual": true,
            "visibility": "internal"
          }
        ],
        "scope": 774,
        "src": "824:1980:2"
      }
    ],
    "src": "33:2772:2"
  },
  "legacyAST": {
    "attributes": {
      "absolutePath": "@openzeppelin/contracts/presets/ERC20PresetMinterPauser.sol",
      "exportedSymbols": {
        "ERC20PresetMinterPauser": [
          773
        ]
      }
    },
    "children": [
      {
        "attributes": {
          "literals": [
            "solidity",
            ">=",
            "0.6",
            ".0",
            "<",
            "0.8",
            ".0"
          ]
        },
        "id": 639,
        "name": "PragmaDirective",
        "src": "33:31:2"
      },
      {
        "attributes": {
          "SourceUnit": 283,
          "absolutePath": "@openzeppelin/contracts/access/AccessControl.sol",
          "file": "../access/AccessControl.sol",
          "scope": 774,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 640,
        "name": "ImportDirective",
        "src": "66:37:2"
      },
      {
        "attributes": {
          "SourceUnit": 1770,
          "absolutePath": "@openzeppelin/contracts/utils/Context.sol",
          "file": "../utils/Context.sol",
          "scope": 774,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 641,
        "name": "ImportDirective",
        "src": "104:30:2"
      },
      {
        "attributes": {
          "SourceUnit": 1277,
          "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20.sol",
          "file": "../token/ERC20/ERC20.sol",
          "scope": 774,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 642,
        "name": "ImportDirective",
        "src": "135:34:2"
      },
      {
        "attributes": {
          "SourceUnit": 1336,
          "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20Burnable.sol",
          "file": "../token/ERC20/ERC20Burnable.sol",
          "scope": 774,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 643,
        "name": "ImportDirective",
        "src": "170:42:2"
      },
      {
        "attributes": {
          "SourceUnit": 1373,
          "absolutePath": "@openzeppelin/contracts/token/ERC20/ERC20Pausable.sol",
          "file": "../token/ERC20/ERC20Pausable.sol",
          "scope": 774,
          "symbolAliases": [
            null
          ],
          "unitAlias": ""
        },
        "id": 644,
        "name": "ImportDirective",
        "src": "213:42:2"
      },
      {
        "attributes": {
          "abstract": false,
          "contractDependencies": [
            282,
            1276,
            1335,
            1372,
            1450,
            1769,
            2353
          ],
          "contractKind": "contract",
          "fullyImplemented": true,
          "linearizedBaseContracts": [
            773,
            1372,
            2353,
            1335,
            1276,
            1450,
            282,
            1769
          ],
          "name": "ERC20PresetMinterPauser",
          "scope": 774
        },
        "children": [
          {
            "attributes": {
              "text": "@dev {ERC20} token, including:\n *  - ability for holders to burn (destroy) their tokens\n - a minter role that allows for token minting (creation)\n - a pauser role that allows to stop all token transfers\n * This contract uses {AccessControl} to lock permissioned functions using the\ndifferent roles - head to its documentation for details.\n * The account that deploys the contract will be granted the minter and pauser\nroles, as well as the default admin role, which will let it grant both minter\nand pauser roles to other accounts."
            },
            "id": 645,
            "name": "StructuredDocumentation",
            "src": "257:566:2"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "Context",
                  "referencedDeclaration": 1769,
                  "type": "contract Context"
                },
                "id": 646,
                "name": "UserDefinedTypeName",
                "src": "860:7:2"
              }
            ],
            "id": 647,
            "name": "InheritanceSpecifier",
            "src": "860:7:2"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "AccessControl",
                  "referencedDeclaration": 282,
                  "type": "contract AccessControl"
                },
                "id": 648,
                "name": "UserDefinedTypeName",
                "src": "869:13:2"
              }
            ],
            "id": 649,
            "name": "InheritanceSpecifier",
            "src": "869:13:2"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20Burnable",
                  "referencedDeclaration": 1335,
                  "type": "contract ERC20Burnable"
                },
                "id": 650,
                "name": "UserDefinedTypeName",
                "src": "884:13:2"
              }
            ],
            "id": 651,
            "name": "InheritanceSpecifier",
            "src": "884:13:2"
          },
          {
            "attributes": {
              "arguments": null
            },
            "children": [
              {
                "attributes": {
                  "contractScope": null,
                  "name": "ERC20Pausable",
                  "referencedDeclaration": 1372,
                  "type": "contract ERC20Pausable"
                },
                "id": 652,
                "name": "UserDefinedTypeName",
                "src": "899:13:2"
              }
            ],
            "id": 653,
            "name": "InheritanceSpecifier",
            "src": "899:13:2"
          },
          {
            "attributes": {
              "constant": true,
              "functionSelector": "d5391393",
              "mutability": "constant",
              "name": "MINTER_ROLE",
              "overrides": null,
              "scope": 773,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 654,
                "name": "ElementaryTypeName",
                "src": "919:7:2"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "isStructConstructorCall": false,
                  "lValueRequested": false,
                  "names": [
                    null
                  ],
                  "tryCall": false,
                  "type": "bytes32",
                  "type_conversion": false
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6",
                          "typeString": "literal_string \"MINTER_ROLE\""
                        }
                      ],
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": -8,
                      "type": "function (bytes memory) pure returns (bytes32)",
                      "value": "keccak256"
                    },
                    "id": 655,
                    "name": "Identifier",
                    "src": "957:9:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "4d494e5445525f524f4c45",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"MINTER_ROLE\"",
                      "value": "MINTER_ROLE"
                    },
                    "id": 656,
                    "name": "Literal",
                    "src": "967:13:2"
                  }
                ],
                "id": 657,
                "name": "FunctionCall",
                "src": "957:24:2"
              }
            ],
            "id": 658,
            "name": "VariableDeclaration",
            "src": "919:62:2"
          },
          {
            "attributes": {
              "constant": true,
              "functionSelector": "e63ab1e9",
              "mutability": "constant",
              "name": "PAUSER_ROLE",
              "overrides": null,
              "scope": 773,
              "stateVariable": true,
              "storageLocation": "default",
              "type": "bytes32",
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "name": "bytes32",
                  "type": "bytes32"
                },
                "id": 659,
                "name": "ElementaryTypeName",
                "src": "987:7:2"
              },
              {
                "attributes": {
                  "argumentTypes": null,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "isStructConstructorCall": false,
                  "lValueRequested": false,
                  "names": [
                    null
                  ],
                  "tryCall": false,
                  "type": "bytes32",
                  "type_conversion": false
                },
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_stringliteral_65d7a28e3265b37a6474929f336521b332c1681b933f6cb9f3376673440d862a",
                          "typeString": "literal_string \"PAUSER_ROLE\""
                        }
                      ],
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": -8,
                      "type": "function (bytes memory) pure returns (bytes32)",
                      "value": "keccak256"
                    },
                    "id": 660,
                    "name": "Identifier",
                    "src": "1025:9:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "hexvalue": "5041555345525f524f4c45",
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "lValueRequested": false,
                      "subdenomination": null,
                      "token": "string",
                      "type": "literal_string \"PAUSER_ROLE\"",
                      "value": "PAUSER_ROLE"
                    },
                    "id": 661,
                    "name": "Literal",
                    "src": "1035:13:2"
                  }
                ],
                "id": 662,
                "name": "FunctionCall",
                "src": "1025:24:2"
              }
            ],
            "id": 663,
            "name": "VariableDeclaration",
            "src": "987:62:2"
          },
          {
            "attributes": {
              "implemented": true,
              "isConstructor": true,
              "kind": "constructor",
              "name": "",
              "overrides": null,
              "scope": 773,
              "stateMutability": "nonpayable",
              "virtual": false,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE` and `PAUSER_ROLE` to the\naccount that deploys the contract.\n     * See {ERC20-constructor}."
                },
                "id": 664,
                "name": "StructuredDocumentation",
                "src": "1056:172:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "name",
                      "overrides": null,
                      "scope": 694,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 665,
                        "name": "ElementaryTypeName",
                        "src": "1245:6:2"
                      }
                    ],
                    "id": 666,
                    "name": "VariableDeclaration",
                    "src": "1245:18:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "symbol",
                      "overrides": null,
                      "scope": 694,
                      "stateVariable": false,
                      "storageLocation": "memory",
                      "type": "string",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "string",
                          "type": "string"
                        },
                        "id": 667,
                        "name": "ElementaryTypeName",
                        "src": "1265:6:2"
                      }
                    ],
                    "id": 668,
                    "name": "VariableDeclaration",
                    "src": "1265:20:2"
                  }
                ],
                "id": 669,
                "name": "ParameterList",
                "src": "1244:42:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 674,
                "name": "ParameterList",
                "src": "1314:0:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 1276,
                      "type": "type(contract ERC20)",
                      "value": "ERC20"
                    },
                    "id": 670,
                    "name": "Identifier",
                    "src": "1294:5:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 666,
                      "type": "string memory",
                      "value": "name"
                    },
                    "id": 671,
                    "name": "Identifier",
                    "src": "1300:4:2"
                  },
                  {
                    "attributes": {
                      "argumentTypes": null,
                      "overloadedDeclarations": [
                        null
                      ],
                      "referencedDeclaration": 668,
                      "type": "string memory",
                      "value": "symbol"
                    },
                    "id": 672,
                    "name": "Identifier",
                    "src": "1306:6:2"
                  }
                ],
                "id": 673,
                "name": "ModifierInvocation",
                "src": "1294:19:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 208,
                              "type": "function (bytes32,address)",
                              "value": "_setupRole"
                            },
                            "id": 675,
                            "name": "Identifier",
                            "src": "1324:10:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 25,
                              "type": "bytes32",
                              "value": "DEFAULT_ADMIN_ROLE"
                            },
                            "id": 676,
                            "name": "Identifier",
                            "src": "1335:18:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address payable",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1757,
                                  "type": "function () view returns (address payable)",
                                  "value": "_msgSender"
                                },
                                "id": 677,
                                "name": "Identifier",
                                "src": "1355:10:2"
                              }
                            ],
                            "id": 678,
                            "name": "FunctionCall",
                            "src": "1355:12:2"
                          }
                        ],
                        "id": 679,
                        "name": "FunctionCall",
                        "src": "1324:44:2"
                      }
                    ],
                    "id": 680,
                    "name": "ExpressionStatement",
                    "src": "1324:44:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 208,
                              "type": "function (bytes32,address)",
                              "value": "_setupRole"
                            },
                            "id": 681,
                            "name": "Identifier",
                            "src": "1379:10:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 658,
                              "type": "bytes32",
                              "value": "MINTER_ROLE"
                            },
                            "id": 682,
                            "name": "Identifier",
                            "src": "1390:11:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address payable",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1757,
                                  "type": "function () view returns (address payable)",
                                  "value": "_msgSender"
                                },
                                "id": 683,
                                "name": "Identifier",
                                "src": "1403:10:2"
                              }
                            ],
                            "id": 684,
                            "name": "FunctionCall",
                            "src": "1403:12:2"
                          }
                        ],
                        "id": 685,
                        "name": "FunctionCall",
                        "src": "1379:37:2"
                      }
                    ],
                    "id": 686,
                    "name": "ExpressionStatement",
                    "src": "1379:37:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bytes32",
                                  "typeString": "bytes32"
                                },
                                {
                                  "typeIdentifier": "t_address_payable",
                                  "typeString": "address payable"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 208,
                              "type": "function (bytes32,address)",
                              "value": "_setupRole"
                            },
                            "id": 687,
                            "name": "Identifier",
                            "src": "1426:10:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 663,
                              "type": "bytes32",
                              "value": "PAUSER_ROLE"
                            },
                            "id": 688,
                            "name": "Identifier",
                            "src": "1437:11:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "arguments": [
                                null
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "address payable",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    null
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 1757,
                                  "type": "function () view returns (address payable)",
                                  "value": "_msgSender"
                                },
                                "id": 689,
                                "name": "Identifier",
                                "src": "1450:10:2"
                              }
                            ],
                            "id": 690,
                            "name": "FunctionCall",
                            "src": "1450:12:2"
                          }
                        ],
                        "id": 691,
                        "name": "FunctionCall",
                        "src": "1426:37:2"
                      }
                    ],
                    "id": 692,
                    "name": "ExpressionStatement",
                    "src": "1426:37:2"
                  }
                ],
                "id": 693,
                "name": "Block",
                "src": "1314:156:2"
              }
            ],
            "id": 694,
            "name": "FunctionDefinition",
            "src": "1233:237:2"
          },
          {
            "attributes": {
              "functionSelector": "40c10f19",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "mint",
              "overrides": null,
              "scope": 773,
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Creates `amount` new tokens for `to`.\n     * See {ERC20-_mint}.\n     * Requirements:\n     * - the caller must have the `MINTER_ROLE`."
                },
                "id": 695,
                "name": "StructuredDocumentation",
                "src": "1476:178:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "to",
                      "overrides": null,
                      "scope": 717,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 696,
                        "name": "ElementaryTypeName",
                        "src": "1673:7:2"
                      }
                    ],
                    "id": 697,
                    "name": "VariableDeclaration",
                    "src": "1673:10:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 717,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 698,
                        "name": "ElementaryTypeName",
                        "src": "1685:7:2"
                      }
                    ],
                    "id": 699,
                    "name": "VariableDeclaration",
                    "src": "1685:14:2"
                  }
                ],
                "id": 700,
                "name": "ParameterList",
                "src": "1672:28:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 701,
                "name": "ParameterList",
                "src": "1716:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_9efa111136b49cf2058ce33f60fa04a5749fd87012d74cadc251e21e1db53342",
                                  "typeString": "literal_string \"ERC20PresetMinterPauser: must have minter role to mint\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 702,
                            "name": "Identifier",
                            "src": "1726:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 71,
                                  "type": "function (bytes32,address) view returns (bool)",
                                  "value": "hasRole"
                                },
                                "id": 703,
                                "name": "Identifier",
                                "src": "1734:7:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 658,
                                  "type": "bytes32",
                                  "value": "MINTER_ROLE"
                                },
                                "id": 704,
                                "name": "Identifier",
                                "src": "1742:11:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1757,
                                      "type": "function () view returns (address payable)",
                                      "value": "_msgSender"
                                    },
                                    "id": 705,
                                    "name": "Identifier",
                                    "src": "1755:10:2"
                                  }
                                ],
                                "id": 706,
                                "name": "FunctionCall",
                                "src": "1755:12:2"
                              }
                            ],
                            "id": 707,
                            "name": "FunctionCall",
                            "src": "1734:34:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "45524332305072657365744d696e7465725061757365723a206d7573742068617665206d696e74657220726f6c6520746f206d696e74",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"ERC20PresetMinterPauser: must have minter role to mint\"",
                              "value": "ERC20PresetMinterPauser: must have minter role to mint"
                            },
                            "id": 708,
                            "name": "Literal",
                            "src": "1770:56:2"
                          }
                        ],
                        "id": 709,
                        "name": "FunctionCall",
                        "src": "1726:101:2"
                      }
                    ],
                    "id": 710,
                    "name": "ExpressionStatement",
                    "src": "1726:101:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 1152,
                              "type": "function (address,uint256)",
                              "value": "_mint"
                            },
                            "id": 711,
                            "name": "Identifier",
                            "src": "1837:5:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 697,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 712,
                            "name": "Identifier",
                            "src": "1843:2:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 699,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 713,
                            "name": "Identifier",
                            "src": "1847:6:2"
                          }
                        ],
                        "id": 714,
                        "name": "FunctionCall",
                        "src": "1837:17:2"
                      }
                    ],
                    "id": 715,
                    "name": "ExpressionStatement",
                    "src": "1837:17:2"
                  }
                ],
                "id": 716,
                "name": "Block",
                "src": "1716:145:2"
              }
            ],
            "id": 717,
            "name": "FunctionDefinition",
            "src": "1659:202:2"
          },
          {
            "attributes": {
              "functionSelector": "8456cb59",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "pause",
              "overrides": null,
              "scope": 773,
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Pauses all token transfers.\n     * See {ERC20Pausable} and {Pausable-_pause}.\n     * Requirements:\n     * - the caller must have the `PAUSER_ROLE`."
                },
                "id": 718,
                "name": "StructuredDocumentation",
                "src": "1867:192:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 719,
                "name": "ParameterList",
                "src": "2078:2:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 720,
                "name": "ParameterList",
                "src": "2096:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_d581fb23a6d539f3015b3485052424734f4b05014d1d5211f35a049cff57e330",
                                  "typeString": "literal_string \"ERC20PresetMinterPauser: must have pauser role to pause\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 721,
                            "name": "Identifier",
                            "src": "2106:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 71,
                                  "type": "function (bytes32,address) view returns (bool)",
                                  "value": "hasRole"
                                },
                                "id": 722,
                                "name": "Identifier",
                                "src": "2114:7:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 663,
                                  "type": "bytes32",
                                  "value": "PAUSER_ROLE"
                                },
                                "id": 723,
                                "name": "Identifier",
                                "src": "2122:11:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1757,
                                      "type": "function () view returns (address payable)",
                                      "value": "_msgSender"
                                    },
                                    "id": 724,
                                    "name": "Identifier",
                                    "src": "2135:10:2"
                                  }
                                ],
                                "id": 725,
                                "name": "FunctionCall",
                                "src": "2135:12:2"
                              }
                            ],
                            "id": 726,
                            "name": "FunctionCall",
                            "src": "2114:34:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "45524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f207061757365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"ERC20PresetMinterPauser: must have pauser role to pause\"",
                              "value": "ERC20PresetMinterPauser: must have pauser role to pause"
                            },
                            "id": 727,
                            "name": "Literal",
                            "src": "2150:57:2"
                          }
                        ],
                        "id": 728,
                        "name": "FunctionCall",
                        "src": "2106:102:2"
                      }
                    ],
                    "id": 729,
                    "name": "ExpressionStatement",
                    "src": "2106:102:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2336,
                              "type": "function ()",
                              "value": "_pause"
                            },
                            "id": 730,
                            "name": "Identifier",
                            "src": "2218:6:2"
                          }
                        ],
                        "id": 731,
                        "name": "FunctionCall",
                        "src": "2218:8:2"
                      }
                    ],
                    "id": 732,
                    "name": "ExpressionStatement",
                    "src": "2218:8:2"
                  }
                ],
                "id": 733,
                "name": "Block",
                "src": "2096:137:2"
              }
            ],
            "id": 734,
            "name": "FunctionDefinition",
            "src": "2064:169:2"
          },
          {
            "attributes": {
              "functionSelector": "3f4ba83a",
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "unpause",
              "overrides": null,
              "scope": 773,
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "public"
            },
            "children": [
              {
                "attributes": {
                  "text": "@dev Unpauses all token transfers.\n     * See {ERC20Pausable} and {Pausable-_unpause}.\n     * Requirements:\n     * - the caller must have the `PAUSER_ROLE`."
                },
                "id": 735,
                "name": "StructuredDocumentation",
                "src": "2239:196:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 736,
                "name": "ParameterList",
                "src": "2456:2:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 737,
                "name": "ParameterList",
                "src": "2474:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_bool",
                                  "typeString": "bool"
                                },
                                {
                                  "typeIdentifier": "t_stringliteral_176e32c23b35bed3cd8ee309232e2364823f6f66078e0cf4f5b5e41eee016186",
                                  "typeString": "literal_string \"ERC20PresetMinterPauser: must have pauser role to unpause\""
                                }
                              ],
                              "overloadedDeclarations": [
                                -18,
                                -18
                              ],
                              "referencedDeclaration": -18,
                              "type": "function (bool,string memory) pure",
                              "value": "require"
                            },
                            "id": 738,
                            "name": "Identifier",
                            "src": "2484:7:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "isStructConstructorCall": false,
                              "lValueRequested": false,
                              "names": [
                                null
                              ],
                              "tryCall": false,
                              "type": "bool",
                              "type_conversion": false
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_bytes32",
                                      "typeString": "bytes32"
                                    },
                                    {
                                      "typeIdentifier": "t_address_payable",
                                      "typeString": "address payable"
                                    }
                                  ],
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 71,
                                  "type": "function (bytes32,address) view returns (bool)",
                                  "value": "hasRole"
                                },
                                "id": 739,
                                "name": "Identifier",
                                "src": "2492:7:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": 663,
                                  "type": "bytes32",
                                  "value": "PAUSER_ROLE"
                                },
                                "id": 740,
                                "name": "Identifier",
                                "src": "2500:11:2"
                              },
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "arguments": [
                                    null
                                  ],
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": false,
                                  "isStructConstructorCall": false,
                                  "lValueRequested": false,
                                  "names": [
                                    null
                                  ],
                                  "tryCall": false,
                                  "type": "address payable",
                                  "type_conversion": false
                                },
                                "children": [
                                  {
                                    "attributes": {
                                      "argumentTypes": [
                                        null
                                      ],
                                      "overloadedDeclarations": [
                                        null
                                      ],
                                      "referencedDeclaration": 1757,
                                      "type": "function () view returns (address payable)",
                                      "value": "_msgSender"
                                    },
                                    "id": 741,
                                    "name": "Identifier",
                                    "src": "2513:10:2"
                                  }
                                ],
                                "id": 742,
                                "name": "FunctionCall",
                                "src": "2513:12:2"
                              }
                            ],
                            "id": 743,
                            "name": "FunctionCall",
                            "src": "2492:34:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "hexvalue": "45524332305072657365744d696e7465725061757365723a206d75737420686176652070617573657220726f6c6520746f20756e7061757365",
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "lValueRequested": false,
                              "subdenomination": null,
                              "token": "string",
                              "type": "literal_string \"ERC20PresetMinterPauser: must have pauser role to unpause\"",
                              "value": "ERC20PresetMinterPauser: must have pauser role to unpause"
                            },
                            "id": 744,
                            "name": "Literal",
                            "src": "2528:59:2"
                          }
                        ],
                        "id": 745,
                        "name": "FunctionCall",
                        "src": "2484:104:2"
                      }
                    ],
                    "id": 746,
                    "name": "ExpressionStatement",
                    "src": "2484:104:2"
                  },
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "arguments": [
                            null
                          ],
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                null
                              ],
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 2352,
                              "type": "function ()",
                              "value": "_unpause"
                            },
                            "id": 747,
                            "name": "Identifier",
                            "src": "2598:8:2"
                          }
                        ],
                        "id": 748,
                        "name": "FunctionCall",
                        "src": "2598:10:2"
                      }
                    ],
                    "id": 749,
                    "name": "ExpressionStatement",
                    "src": "2598:10:2"
                  }
                ],
                "id": 750,
                "name": "Block",
                "src": "2474:141:2"
              }
            ],
            "id": 751,
            "name": "FunctionDefinition",
            "src": "2440:175:2"
          },
          {
            "attributes": {
              "baseFunctions": [
                1275,
                1371
              ],
              "documentation": null,
              "implemented": true,
              "isConstructor": false,
              "kind": "function",
              "modifiers": [
                null
              ],
              "name": "_beforeTokenTransfer",
              "scope": 773,
              "stateMutability": "nonpayable",
              "virtual": true,
              "visibility": "internal"
            },
            "children": [
              {
                "children": [
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "ERC20",
                      "referencedDeclaration": 1276,
                      "type": "contract ERC20"
                    },
                    "id": 759,
                    "name": "UserDefinedTypeName",
                    "src": "2719:5:2"
                  },
                  {
                    "attributes": {
                      "contractScope": null,
                      "name": "ERC20Pausable",
                      "referencedDeclaration": 1372,
                      "type": "contract ERC20Pausable"
                    },
                    "id": 760,
                    "name": "UserDefinedTypeName",
                    "src": "2726:13:2"
                  }
                ],
                "id": 761,
                "name": "OverrideSpecifier",
                "src": "2710:30:2"
              },
              {
                "children": [
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "from",
                      "overrides": null,
                      "scope": 772,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 752,
                        "name": "ElementaryTypeName",
                        "src": "2651:7:2"
                      }
                    ],
                    "id": 753,
                    "name": "VariableDeclaration",
                    "src": "2651:12:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "to",
                      "overrides": null,
                      "scope": 772,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "address",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "address",
                          "stateMutability": "nonpayable",
                          "type": "address"
                        },
                        "id": 754,
                        "name": "ElementaryTypeName",
                        "src": "2665:7:2"
                      }
                    ],
                    "id": 755,
                    "name": "VariableDeclaration",
                    "src": "2665:10:2"
                  },
                  {
                    "attributes": {
                      "constant": false,
                      "mutability": "mutable",
                      "name": "amount",
                      "overrides": null,
                      "scope": 772,
                      "stateVariable": false,
                      "storageLocation": "default",
                      "type": "uint256",
                      "value": null,
                      "visibility": "internal"
                    },
                    "children": [
                      {
                        "attributes": {
                          "name": "uint256",
                          "type": "uint256"
                        },
                        "id": 756,
                        "name": "ElementaryTypeName",
                        "src": "2677:7:2"
                      }
                    ],
                    "id": 757,
                    "name": "VariableDeclaration",
                    "src": "2677:14:2"
                  }
                ],
                "id": 758,
                "name": "ParameterList",
                "src": "2650:42:2"
              },
              {
                "attributes": {
                  "parameters": [
                    null
                  ]
                },
                "children": [],
                "id": 762,
                "name": "ParameterList",
                "src": "2741:0:2"
              },
              {
                "children": [
                  {
                    "children": [
                      {
                        "attributes": {
                          "argumentTypes": null,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "isStructConstructorCall": false,
                          "lValueRequested": false,
                          "names": [
                            null
                          ],
                          "tryCall": false,
                          "type": "tuple()",
                          "type_conversion": false
                        },
                        "children": [
                          {
                            "attributes": {
                              "argumentTypes": [
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                },
                                {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              ],
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": false,
                              "lValueRequested": false,
                              "member_name": "_beforeTokenTransfer",
                              "referencedDeclaration": 1371,
                              "type": "function (address,address,uint256)"
                            },
                            "children": [
                              {
                                "attributes": {
                                  "argumentTypes": null,
                                  "overloadedDeclarations": [
                                    null
                                  ],
                                  "referencedDeclaration": -25,
                                  "type": "contract super ERC20PresetMinterPauser",
                                  "value": "super"
                                },
                                "id": 763,
                                "name": "Identifier",
                                "src": "2751:5:2"
                              }
                            ],
                            "id": 765,
                            "name": "MemberAccess",
                            "src": "2751:26:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 753,
                              "type": "address",
                              "value": "from"
                            },
                            "id": 766,
                            "name": "Identifier",
                            "src": "2778:4:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 755,
                              "type": "address",
                              "value": "to"
                            },
                            "id": 767,
                            "name": "Identifier",
                            "src": "2784:2:2"
                          },
                          {
                            "attributes": {
                              "argumentTypes": null,
                              "overloadedDeclarations": [
                                null
                              ],
                              "referencedDeclaration": 757,
                              "type": "uint256",
                              "value": "amount"
                            },
                            "id": 768,
                            "name": "Identifier",
                            "src": "2788:6:2"
                          }
                        ],
                        "id": 769,
                        "name": "FunctionCall",
                        "src": "2751:44:2"
                      }
                    ],
                    "id": 770,
                    "name": "ExpressionStatement",
                    "src": "2751:44:2"
                  }
                ],
                "id": 771,
                "name": "Block",
                "src": "2741:61:2"
              }
            ],
            "id": 772,
            "name": "FunctionDefinition",
            "src": "2621:181:2"
          }
        ],
        "id": 773,
        "name": "ContractDefinition",
        "src": "824:1980:2"
      }
    ],
    "id": 774,
    "name": "SourceUnit",
    "src": "33:2772:2"
  },
  "compiler": {
    "name": "solc",
    "version": "0.6.6+commit.6c089d02.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "3.4.3",
  "updatedAt": "2022-04-14T06:12:08.483Z",
  "devdoc": {
    "details": "{ERC20} token, including: *  - ability for holders to burn (destroy) their tokens - a minter role that allows for token minting (creation) - a pauser role that allows to stop all token transfers * This contract uses {AccessControl} to lock permissioned functions using the different roles - head to its documentation for details. * The account that deploys the contract will be granted the minter and pauser roles, as well as the default admin role, which will let it grant both minter and pauser roles to other accounts.",
    "methods": {
      "allowance(address,address)": {
        "details": "See {IERC20-allowance}."
      },
      "approve(address,uint256)": {
        "details": "See {IERC20-approve}.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "balanceOf(address)": {
        "details": "See {IERC20-balanceOf}."
      },
      "burn(uint256)": {
        "details": "Destroys `amount` tokens from the caller.     * See {ERC20-_burn}."
      },
      "burnFrom(address,uint256)": {
        "details": "Destroys `amount` tokens from `account`, deducting from the caller's allowance.     * See {ERC20-_burn} and {ERC20-allowance}.     * Requirements:     * - the caller must have allowance for ``accounts``'s tokens of at least `amount`."
      },
      "constructor": {
        "details": "Grants `DEFAULT_ADMIN_ROLE`, `MINTER_ROLE` and `PAUSER_ROLE` to the account that deploys the contract.     * See {ERC20-constructor}."
      },
      "decimals()": {
        "details": "Returns the number of decimals used to get its user representation. For example, if `decimals` equals `2`, a balance of `505` tokens should be displayed to a user as `5,05` (`505 / 10 ** 2`).     * Tokens usually opt for a value of 18, imitating the relationship between Ether and Wei. This is the value {ERC20} uses, unless {_setupDecimals} is called.     * NOTE: This information is only used for _display_ purposes: it in no way affects any of the arithmetic of the contract, including {IERC20-balanceOf} and {IERC20-transfer}."
      },
      "decreaseAllowance(address,uint256)": {
        "details": "Atomically decreases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address. - `spender` must have allowance for the caller of at least `subtractedValue`."
      },
      "getRoleAdmin(bytes32)": {
        "details": "Returns the admin role that controls `role`. See {grantRole} and {revokeRole}.     * To change a role's admin, use {_setRoleAdmin}."
      },
      "getRoleMember(bytes32,uint256)": {
        "details": "Returns one of the accounts that have `role`. `index` must be a value between 0 and {getRoleMemberCount}, non-inclusive.     * Role bearers are not sorted in any particular way, and their ordering may change at any point.     * WARNING: When using {getRoleMember} and {getRoleMemberCount}, make sure you perform all queries on the same block. See the following https://forum.openzeppelin.com/t/iterating-over-elements-on-enumerableset-in-openzeppelin-contracts/2296[forum post] for more information."
      },
      "getRoleMemberCount(bytes32)": {
        "details": "Returns the number of accounts that have `role`. Can be used together with {getRoleMember} to enumerate all bearers of a role."
      },
      "grantRole(bytes32,address)": {
        "details": "Grants `role` to `account`.     * If `account` had not been already granted `role`, emits a {RoleGranted} event.     * Requirements:     * - the caller must have ``role``'s admin role."
      },
      "hasRole(bytes32,address)": {
        "details": "Returns `true` if `account` has been granted `role`."
      },
      "increaseAllowance(address,uint256)": {
        "details": "Atomically increases the allowance granted to `spender` by the caller.     * This is an alternative to {approve} that can be used as a mitigation for problems described in {IERC20-approve}.     * Emits an {Approval} event indicating the updated allowance.     * Requirements:     * - `spender` cannot be the zero address."
      },
      "mint(address,uint256)": {
        "details": "Creates `amount` new tokens for `to`.     * See {ERC20-_mint}.     * Requirements:     * - the caller must have the `MINTER_ROLE`."
      },
      "name()": {
        "details": "Returns the name of the token."
      },
      "pause()": {
        "details": "Pauses all token transfers.     * See {ERC20Pausable} and {Pausable-_pause}.     * Requirements:     * - the caller must have the `PAUSER_ROLE`."
      },
      "paused()": {
        "details": "Returns true if the contract is paused, and false otherwise."
      },
      "renounceRole(bytes32,address)": {
        "details": "Revokes `role` from the calling account.     * Roles are often managed via {grantRole} and {revokeRole}: this function's purpose is to provide a mechanism for accounts to lose their privileges if they are compromised (such as when a trusted device is misplaced).     * If the calling account had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must be `account`."
      },
      "revokeRole(bytes32,address)": {
        "details": "Revokes `role` from `account`.     * If `account` had been granted `role`, emits a {RoleRevoked} event.     * Requirements:     * - the caller must have ``role``'s admin role."
      },
      "symbol()": {
        "details": "Returns the symbol of the token, usually a shorter version of the name."
      },
      "totalSupply()": {
        "details": "See {IERC20-totalSupply}."
      },
      "transfer(address,uint256)": {
        "details": "See {IERC20-transfer}.     * Requirements:     * - `recipient` cannot be the zero address. - the caller must have a balance of at least `amount`."
      },
      "transferFrom(address,address,uint256)": {
        "details": "See {IERC20-transferFrom}.     * Emits an {Approval} event indicating the updated allowance. This is not required by the EIP. See the note at the beginning of {ERC20}.     * Requirements:     * - `sender` and `recipient` cannot be the zero address. - `sender` must have a balance of at least `amount`. - the caller must have allowance for ``sender``'s tokens of at least `amount`."
      },
      "unpause()": {
        "details": "Unpauses all token transfers.     * See {ERC20Pausable} and {Pausable-_unpause}.     * Requirements:     * - the caller must have the `PAUSER_ROLE`."
      }
    }
  },
  "userdoc": {
    "methods": {}
  }
}
