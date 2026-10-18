import Card from "@/components/Card";
import Table from "@/components/Table";
import { use, useEffect, useState } from "react";

const DashboardLeader = () => {
  const [productList, setProductList] = useState();
  const [carts, setCartsList] = useState([]);
  const [userList, setUserList] = useState([]);

  const findProductById = (id) => {
    return productList.find((product) => product.id === id);
  };

  const findUserById = (id) => {
    return userList.find((user) => user.id === id);
  };

  const getAllUsers = async (id) => {
    try {
      const users = await fetch("https://fakestoreapi.com/users").then((res) =>
        res.json(),
      );
      setUserList(users);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllProduct = async () => {
    try {
      const products = await fetch("https://fakestoreapi.com/products").then(
        (res) => res.json(),
      );
      setProductList(products);
    } catch (err) {
      console.log(err);
    }
  };

  const getAllCarts = async () => {
    try {
      const cart = await fetch("https://fakestoreapi.com/carts").then((res) =>
        res.json(),
      );
      const cartDetailList = cart.map((cart) => {
        const user = findUserById(cart.userId);
        const products = cart.products.map((cartProduct) => {
          const productDetail = findProductById(cartProduct.productId);
          return { ...productDetail, ...cartProduct };
        });
        return { ...carts, user, products };
      });
      setCartsList(cartDetailList);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getAllUsers();
    getAllProduct();
  }, []);

  useEffect(() => {
    getAllCarts();
  }, [userList, productList]);

  const columns = [
    {
      header: "Nama Produk",
      key: "title",
      cell: (value) => value,
    },
    {
      header: "quantity",
      key: "quantity",
      cell: (value) => value,
    },
    {
      header: "Description",
      key: "description",
      cell: (value) => value,
    },
    {
      header: "Kategori",
      key: "category",
      cell: (value) => value,
    },
  ];

  return (
    <div className="flex flex-col gap-30">
      {carts.map(({ id, user, products }) => {
        return (
          <Card className="p-4" key={id}>
            <p>
              {user?.name.firstname} {user?.name.lastname}
            </p>
            <Table columns={columns} data={products} />
          </Card>
        );
      })}
    </div>
  );
};

export default DashboardLeader;
