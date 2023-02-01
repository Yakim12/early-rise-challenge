// SPDX-License-Identifier: GPL-3.0
pragma solidity >=0.7.0 <0.9.0;

contract Early{
    struct Erecord{
        string title;
        string imgUrl;
        uint256 timestamp;
    }

    mapping(address=> Erecord[]) addressRecords;

    /* create a record */
    function newRecord(string memory _title, string memory _imgUrl) public{
        Erecord memory record = Erecord(_title, _imgUrl,  block.timestamp);
        Erecord[] storage records = addressRecords[msg.sender];
        records.push(record);
        addressRecords[msg.sender] = records;
    }

    function getUserRecrod() public  view returns(Erecord[] memory){
        Erecord[] memory records = addressRecords[msg.sender];
        return records;
    }
}

