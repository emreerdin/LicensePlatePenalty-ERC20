// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";
import "@openzeppelin/contracts/access/Ownable.sol";

contract LicensePlatePenaltyToken is ERC20, Ownable {
    uint256 public tokenPrice = 1 ether;
    mapping(address => string[]) public ownedLicensePlates;
    mapping(string => bool) private assignedLicensePlates;
    mapping(string => uint256[]) public penaltiesForPlate;

    constructor() ERC20("LicensePlatePenaltyToken", "LPPT") {}

    function assignLicensePlate(
        address _owner,
        string memory _plate
    ) external onlyOwner {
        require(
            !assignedLicensePlates[_plate],
            "This license plate is already assigned."
        );
        ownedLicensePlates[_owner].push(_plate);
        assignedLicensePlates[_plate] = true;
    }

    function assignPenalty(
        string memory _plate,
        uint256 _penaltyAmount
    ) external onlyOwner {
        require(assignedLicensePlates[_plate], "License plate not found.");
        penaltiesForPlate[_plate].push(_penaltyAmount);
    }

    function buyTokens() external payable {
        require(msg.value > 0, "You must send some Ether.");
        uint256 tokensToMint = msg.value / tokenPrice;
        require(tokensToMint > 0, "Not enough Ether sent to buy tokens.");

        _mint(msg.sender, tokensToMint);
    }

    function transferTokens(address _to, uint256 _amount) external {
        _transfer(msg.sender, _to, _amount);
    }

    function withdrawEther() external onlyOwner {
        payable(msg.sender).transfer(address(this).balance);
    }

    function viewOwnedPlatesAndPenalty(
        address _owner
    )
        external
        view
        returns (string[] memory plates, uint256[][] memory penalties)
    {
        plates = ownedLicensePlates[_owner];
        penalties = new uint256[][](plates.length);

        for (uint256 i = 0; i < plates.length; i++) {
            penalties[i] = penaltiesForPlate[plates[i]];
        }

        return (plates, penalties);
    }

    function payPenalty(string memory _plate, uint256 penaltyIndex) external {
        uint256[] storage penalties = penaltiesForPlate[_plate];
        require(penaltyIndex < penalties.length, "Invalid penalty index.");

        uint256 penaltyAmount = penalties[penaltyIndex];
        require(
            balanceOf(msg.sender) >= penaltyAmount,
            "Not enough tokens to pay penalty."
        );

        _transfer(msg.sender, owner(), penaltyAmount);
        penalties[penaltyIndex] = 0;
    }

    function getAllPlatesAndPenalties(
        address _owner
    )
        external
        view
        returns (string[] memory plates, uint256[][] memory penalties)
    {
        plates = ownedLicensePlates[_owner];
        penalties = new uint256[][](plates.length);

        for (uint256 i = 0; i < plates.length; i++) {
            penalties[i] = penaltiesForPlate[plates[i]];
        }

        return (plates, penalties);
    }

    function getPlatePenalties(
        string memory _plate
    ) external view returns (uint256[] memory) {
        return penaltiesForPlate[_plate];
    }
}
