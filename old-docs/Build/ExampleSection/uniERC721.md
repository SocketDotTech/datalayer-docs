---
id: example-uniERC721
title: Universal ERC721
sidebar_position: 2
---

Universal ERC-721 is an extension of ERC-721 token standard with cross-chain transfer capabilities, built on top of SocketDL.

You can find the example on [GitHub](https://github.com/SocketDotTech/socketDL-examples/blob/main/src/universalTokens/uniERC721/uniERC721.sol).

```javascript

    /* Transfers tokens between chains */
    function uniTransfer(
        uint256 _destChainSlug,
        address _destReceiver,
        uint256 tokenId
    ) external payable {
        _burn(tokenId);

        bytes memory payload = abi.encode(msg.sender, _destReceiver, tokenId);

        ISocket(socket).outbound{value: msg.value}(
            _destChainSlug,
            destGasLimits[_destChainSlug],
            bytes32(0),
            bytes32(0),
            payload
        );

        emit UniTransfer(_destChainSlug, _destReceiver, tokenId);
    }

    function _uniReceive(
        uint256 _siblingChainSlug,
        address _sender,
        address _receiver,
        uint256 _tokenId
    ) internal {
        _safeMint(_receiver, _tokenId);

        emit UniReceive(_sender, _receiver, _tokenId, _siblingChainSlug);
    }

```