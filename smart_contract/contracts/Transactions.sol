// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0; // choosing the solidity version

contract Transactions{
    // contract is like a class in oop
    uint256 transactionCount; // holds the number of transactions

    event Transfer(address from,address receiver,uint256 amount,string message,uint256 timestamp,string keyword);
    //function to be triggered

    struct TransferStruct {
        // like an object
        address sender;
        address receiver;
        uint256 amount;
        string message;
        uint256 timestamp;
        string keyword;
    }

    TransferStruct[] transactions; // array of objects

    function addToBlockchain(address payable receiver, uint amount, string memory message, string memory keyword) public { // doesnt return anything, does some actions / message is a message stored in the memory of the transaction
        transactionCount += 1;
        transactions.push(TransferStruct(msg.sender, receiver, amount, message, block.timestamp, keyword));  // Pushing a transaction into the transaction array

        emit Transfer(msg.sender, receiver, amount, message, block.timestamp, keyword);
    }

    function getAllTransactions() public view returns (TransferStruct[] memory) { // memory is an array of transactions that holds the old transactions 
        return transactions;
    }

    function getTransactionCount() public view returns (uint256) { // counts the number of transactions
        return transactionCount;
    }
}
