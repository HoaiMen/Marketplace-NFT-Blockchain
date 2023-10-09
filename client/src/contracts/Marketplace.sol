pragma solidity ^0.5.0;

contract Marketplace {
  string public name;
  uint public productCount = 0;
  uint public latestProductId = 0;
  uint public totalEtherSold = 0;
  mapping(uint => Product) public products;

  struct Product {
    uint id;
    string name;
    uint price;
    address payable owner;
    bool purchased;
    bytes32 itemHash;
  }

  event ProductCreated(
    uint id,
    string name,
    uint price,
    address payable owner,
    bool purchased,
    bytes32 itemHash
  );

  event ProductPurchased(
    uint id,
    string name,
    uint price,
    address payable owner,
    bool purchased,
    bytes32 itemHash // Thêm trường itemHash vào sự kiện ProductPurchased
  );

  constructor() public {
    name = 'Dapp University Marketplace';
  }

  function createProduct(string memory _name, uint _price) public {
    require(bytes(_name).length > 0);
    require(_price > 0);
    productCount++;

    // Create the itemHash by hashing the product information
    bytes32 itemHash = keccak256(abi.encodePacked(_name, _price, msg.sender));

    products[productCount] = Product(
      productCount,
      _name,
      _price,
      msg.sender,
      false,
      itemHash // Gán itemHash vào sản phẩm
    );

    latestProductId = productCount; // Cập nhật latestProductId

    emit ProductCreated(productCount, _name, _price, msg.sender, false, itemHash);
  }

  function purchaseProduct(uint _id) public payable {
    // Lấy thông tin sản phẩm từ lưu trữ
    Product storage _product = products[_id];
    // Lấy địa chỉ của người bán
    address payable _seller = _product.owner;
    // Kiểm tra xem sản phẩm có id hợp lệ hay không
    require(_product.id > 0 && _product.id <= productCount);
    // Yêu cầu số Ether trong giao dịch phải đủ để mua sản phẩm
    require(msg.value >= _product.price);
    // Yêu cầu sản phẩm chưa được mua trước đó
    require(!_product.purchased);
    // Yêu cầu người mua không phải là người bán
    require(_seller != msg.sender);

    // Chuyển quyền sở hữu sản phẩm cho người mua
    _product.owner = msg.sender;
    // Đánh dấu sản phẩm đã được mua
    _product.purchased = true;
    // Cập nhật thông tin sản phẩm trong mapping
    products[_id] = _product;
    // Trả tiền cho người bán bằng cách chuyển Ether
    address(_seller).transfer(msg.value);
    totalEtherSold += _product.price;
    // Gửi sự kiện thông báo việc mua sản phẩm thành công
    emit ProductPurchased(
      _product.id,
      _product.name,
      _product.price,
      _product.owner,
      _product.purchased,
      _product.itemHash
    );
  }

  function getItemHash(uint _id) public view returns (bytes32) {
    require(_id > 0 && _id <= productCount);
    return products[_id].itemHash;
  }

  function getTotalEtherInProducts() public view returns (uint) {
    uint totalEtherInProducts = 0;
    for (uint i = 1; i <= productCount; i++) {
      totalEtherInProducts += products[i].price;
    }
    return totalEtherInProducts;
  }

  // Hàm lấy số lượng sản phẩm của chủ sở hữu
  function getProductCountByOwner(address _owner) public view returns (uint) {
    uint count = 0;
    for (uint i = 1; i <= productCount; i++) {
      if (products[i].owner == _owner) {
        count++;
      }
    }
    return count;
  }

  // Hàm lấy thông tin sản phẩm theo chủ sở hữu và chỉ số
  function getProductByOwner(
    address _owner,
    uint _index
  )
    public
    view
    returns (
      uint id,
      string memory productName,
      uint price,
      address payable owner,
      bool purchased,
      bytes32 itemHash
    )
  {
    uint count = 0;
    for (uint i = 1; i <= productCount; i++) {
      if (products[i].owner == _owner) {
        count++;
        if (count == _index + 1) {
          Product memory product = products[i];
          return (
            product.id,
            product.name,
            product.price,
            product.owner,
            product.purchased,
            product.itemHash
          );
        }
      }
    }

    // Trả về một giá trị mặc định nếu không tìm thấy sản phẩm
    return (0, '', 0, address(0), false, bytes32(0));
  }
}
