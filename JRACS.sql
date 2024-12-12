CREATE TABLE Manager (
    ManagerID INT PRIMARY KEY,
    ManagerName VARCHAR(255),
    ContactInfo VARCHAR(255)
);

CREATE TABLE Branch (
    BranchID INT PRIMARY KEY,
    BranchLocation VARCHAR(255),
    ManagerID INT,
    FOREIGN KEY (ManagerID) REFERENCES Manager(ManagerID)
);

CREATE TABLE Clerk (
    ClerkID INT PRIMARY KEY,
    ClerkName VARCHAR(255),
    ContactInfo VARCHAR(255),
    BranchID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID)
);

CREATE TABLE Customer (
    CustomerID INT PRIMARY KEY,
    CustomerName VARCHAR(255),
    ContactInfo VARCHAR(255),
    Address VARCHAR(255)
);

CREATE TABLE Category (
    CategoryID INT PRIMARY KEY,
    CategoryName VARCHAR(255)
);

CREATE TABLE Medicine (
    ProductID INT PRIMARY KEY,
    ProductName VARCHAR(255),
    Description VARCHAR(255),
    Price DECIMAL(10, 2),
    StockQuantity INT,
    BranchID INT,
    CategoryID INT,
    FOREIGN KEY (BranchID) REFERENCES Branch(BranchID),
    FOREIGN KEY (CategoryID) REFERENCES Category(CategoryID)
);

CREATE TABLE Handles (
    ClerkID INT,
    ProductID INT,
    FOREIGN KEY (ClerkID) REFERENCES Clerk(ClerkID),
    FOREIGN KEY (ProductID) REFERENCES Medicine(ProductID),
    PRIMARY KEY (ClerkID, ProductID)
);

CREATE TABLE Buys (
    CustomerID INT,
    ProductID INT,
    PurchaseDate DATE,
    Quantity INT,
    FOREIGN KEY (CustomerID) REFERENCES Customer(CustomerID),
    FOREIGN KEY (ProductID) REFERENCES Medicine(ProductID),
    PRIMARY KEY (CustomerID, ProductID, PurchaseDate)
);
