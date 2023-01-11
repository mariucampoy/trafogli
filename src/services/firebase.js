import { initializeApp } from "firebase/app";

import {
    getFirestore,
    collection,
    getDocs,
    doc,
    getDoc,
    query,
    where,
    addDoc,
    writeBatch,
    documentId,
  } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCjUdrnqNv1_bhDPrZuFPHJ8xcX6RZtLEU",
  authDomain: "trafogli.firebaseapp.com",
  projectId: "trafogli",
  storageBucket: "trafogli.appspot.com",
  messagingSenderId: "465685633550",
  appId: "1:465685633550:web:08b8f1cb9dfd2da0a37a5f",
  measurementId: "G-5ZTR669RW3"
};


const FirebaseApp = initializeApp(firebaseConfig);

const DB = getFirestore(FirebaseApp);

export async function getItemsFromAPI() {
    try {
      const docRef = collection(DB, "products2");

      let docSnap = await getDocs(docRef);

      const products = docSnap.docs.map((doc) => {
        return {
          ...doc.data(),
          id: doc.id,
        };
      });

      return products;

    } catch (error) {
      console.error(error);
    }
  }


export async function getSingleItemFromAPI(id) {

    const docRef = doc(DB, "products2", id);

    const docSnap = await getDoc(docRef);


    if (docSnap.exists()) {

      return {
        ...docSnap.data(),
        id: docSnap.id,
      };
    } else {
      console.error("error");
    }
  }




export async function getItemsFromAPIByCategory(categoryId) {

    const docRef = collection(DB, "products2");
    const myQuery = query(docRef, where("category", "==", categoryId));


    const docSnap = await getDocs(myQuery);

    const products = docSnap.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    return products;
  }

  export async function getItemsFromAPIByColor(colorId) {

    const docRef = collection(DB, "products2");
    const myQuery = query(docRef, where("color", "array-contains", colorId));

    const docSnap = await getDocs(myQuery);

    const products = docSnap.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };

  });

    return products;
  }


  export async function getItemsFromAPIBySizes(medidaId) {

    const docRef = collection(DB, "products2");
    const myQuery = query(docRef, where("medida", "array-contains", medidaId));

    const docSnap = await getDocs(myQuery);

    const products = docSnap.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };

  });

    return products;
  }



// export async function exportItemsToFirestore() {

//     const items = [

//         { id: 1,
//           title: "ALGODÓN EGIPCIO JUEGO DE SÁBANAS QUEEN 800 HILOS",
//           price: 70500,
//           stock: 10,
//           category: "Sabanas",
//           subcategory: "Egyptian Cotton",
//           img: "../img/products/sabana.jpeg",
//           description: "",
//         },
//         { id: 2,
//             title: "ALGODÓN EGIPCIO SÁBANA AJUSTABLE QUEEN 800 HILOS",
//             price: 29200,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Egyptian Cotton",
//             img: "../img/products/sabana.jpeg",
//             description: "",
//           },
//           { id: 3,
//             title: "ALGODÓN EGIPCIO SÁBANA AJUSTABLE KING 800 HILOS",
//             price: 31700,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Egyptian Cotton",
//             img: "../img/products/sabana.jpeg",
//             description: "",
//           },
//           { id: 4,
//             title: "ALGODÓN EGIPCIO JUEGO DE SÁBANAS KING 800 HILOS",
//             price: 75900,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Egyptian Cotton",
//             img: "../img/products/sabana.jpeg",
//             description: "",
//           },
//           { id: 5,
//             title: "ALGODÓN EGIPCIO JUEGO DE SÁBANAS SUPER KING 800 HILOS",
//             price: 85400,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Egyptian Cotton",
//             img: "../img/products/sabana.jpeg",
//             description: "",
//           },
//           { id: 6,
//             title: "ALGODÓN EGIPCIO FUNDAS DE ALMOHADA 800 HILOS",
//             price: 11300,
//             stock: 10,
//             category: "Fundas",
//             subcategory: "Egyptian Cotton",
//             img: "../img/products/funda.jpeg",
//             description: "",
//           },
//           { id: 7,
//             title: "ALGODÓN EGIPCIO FUNDA DE EDREDÓN QUEEN 800 HILOS",
//             price: 56400,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Egyptian Cotton",
//             img: "../img/products/edredon.jpeg",
//             description: "",
//           },
//           { id: 8,
//             title: "ALGODÓN EGIPCIO FUNDA DE EDREDÓN KING 800 HILOS",
//             price: 60700,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Egyptian Cotton",
//             img: "../img/products/edredon.jpeg",
//             description: "",
//           },
//           { id: 9,
//             title: "ALGODÓN EGIPCIO FUNDA DE EDREDÓN SUPER KING 800 HILOS",
//             price: 65100,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Egyptian Cotton",
//             img: "../img/products/edredon.jpeg",
//             description: "",
//           },
//           { id: 10,
//             title: "LINO FRANCÉS FUNDA DE EDREDÓN 170 HILOS GRAY",
//             price: 107500,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Linen",
//             img: "../img/products/edredon-lino.jpeg",
//             description: "",
//           },
//           { id: 11,
//             title: "LINO FRANCÉS FUNDA DE EDREDÓN 170 HILOS OFF WHITE",
//             price: 134400,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Linen",
//             img: "../img/products/edredon-lino.jpeg",
//             description: "",
//           },
//           { id: 12,
//             title: "KIMONO GRIS OSCURO",
//             price: 23000,
//             stock: 10,
//             category: "Kimonos",
//             subcategory: "Linen",
//             img: "../img/products/kimono-grisoscuro.jpeg",
//             description: "",
//           },
//           { id: 13,
//             title: "KIMONO GRIS CLARO",
//             price: 23000,
//             stock: 10,
//             category: "Kimonos",
//             subcategory: "Linen",
//             img: "../img/products/kimono-grisclaro.jpeg",
//             description: "",
//           },
//           { id: 14,
//             title: "KIMONO CAMEL",
//             price: 23000,
//             stock: 10,
//             category: "Kimonos",
//             subcategory: "Linen",
//             img: "../img/products/kimono-camel.jpeg",
//             description: "",
//           },
//           { id: 15,
//             title: "BAMBOO JUEGO DE SÁBANAS FULL 400 HILOS",
//             price: 52200,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 16,
//             title: "BAMBOO JUEGO DE SÁBANAS QUEEN 300 HILOS",
//             price: 60800,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 17,
//             title: "BAMBOO SÁBANA AJUSTABLE QUEEN 400 HILOS",
//             price: 29400,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 18,
//             title: "BAMBOO JUEGO DE SÁBANAS QUEEN 400 HILOS",
//             price: 70300,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 19,
//             title: "BAMBOO EDREDÓN QUEEN 300 GRS.",
//             price: 89400,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/edredon-bamboo.jpeg",
//             description: "",
//           },
//           { id: 20,
//             title: "BAMBOO FUNDA DE EDREDÓN QUEEN 400 HILOS",
//             price: 54400,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/edredon-bamboo.jpeg",
//             description: "",
//           },
//           { id: 21,
//             title: "BAMBOO JUEGO DE SÁBANAS KING 400 HILOS",
//             price: 75600,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 22,
//             title: "BAMBOO SÁBANA AJUSTABLE KING 400 HILOS",
//             price: 31300,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 23,
//             title: "BAMBOO EDREDÓN KING 300 GRS.",
//             price: 92100,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/edredon-bamboo.jpeg",
//             description: "",
//           },
//           { id: 24,
//             title: "BAMBOO FUNDA DE EDREDÓN KING 400 HILOS",
//             price: 58500,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/edredon-bamboo.jpeg",
//             description: "",
//           },
//           { id: 25,
//             title: "BAMBOO JUEGO DE SÁBANAS SUPER KING 400 HILOS",
//             price: 81100,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 26,
//             title: "BAMBOO SÁBANA AJUSTABLE SUPER KING 400 HILOS",
//             price: 32100,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 27,
//             title: "BAMBOO EDREDÓN SUPER KING 300 GRS.",
//             price: 93900,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/edredon-bamboo.jpeg",
//             description: "",
//           },
//           { id: 28,
//             title: "BAMBOO FUNDA DE EDREDÓN SUPER KING 400 HILOS",
//             price: 61800,
//             stock: 10,
//             category: "Edredon",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/edredon-bamboo.jpeg",
//             description: "",
//           },
//           { id: 29,
//             title: "BAMBOO CUNA FUNCIONAL 300 HILOS",
//             price: 23800,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/cuna.png",
//             description: "",
//           },
//           { id: 30,
//             title: "BAMBOO FUNDAS DE ALMOHADA 400 HILOS",
//             price: 10400,
//             stock: 10,
//             category: "Fundas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/funda-egipcio.jpeg",
//             description: "",
//           },
//           { id: 31,
//             title: "BAMBOO JUEGO DE SÁBANAS TWIN 400 HILOS",
//             price: 49200,
//             stock: 10,
//             category: "Sabanas",
//             subcategory: "Organic Bamboo",
//             img: "../img/products/sabana-bamboo.jpeg",
//             description: "",
//           },
//           { id: 32,
//             title: "MANTA OCHOS",
//             price: 17900,
//             stock: 10,
//             category: "Mantas",
//             subcategory: "",
//             img: "../img/products/manta-ochos.jpeg",
//             description: "",
//           },
//           { id: 33,
//             title: "MANTA TATIANA",
//             price: 19750,
//             stock: 10,
//             category: "Mantas",
//             subcategory: "",
//             img: "../img/products/manta-tatiana.jpeg",
//             description: "",
//           },

//     ]

//     const collectionRef = collection(DB, "products");
//     for (let item of items) {
//         item.index = item.id;
//         delete item.id;
//         const docRef = await addDoc(collectionRef, item);
//       }

//   }



// export async function createBuyOrderFirestore(buyOrderData) {
//     const collectionRef = collection(DB, "orders");
//     const docRef = await addDoc(collectionRef, buyOrderData);

//     return docRef.id;
//   }



export async function createBuyOrderFirestoreWithStock(buyOrderData) {
    const collectionProductsRef = collection(DB, "products2");
    const collectionOrdersRef = collection(DB, "buyorders");
    const batch = writeBatch(DB);

    let arrayIds = buyOrderData.items.map((item) => {
      return item.id;
    });

    const q = query(collectionProductsRef, where(documentId(), "in", arrayIds));

    let productsSnapshot = await getDocs(q);

    productsSnapshot.docs.forEach((doc) => {
      let stockActual = doc.data().stock;
      let itemInCart = buyOrderData.items.find((item) => item.id === doc.id);
      let stockActualizado = stockActual - itemInCart.count;

      batch.update(doc.ref, { stock: stockActualizado });
    });

    const docOrderRef = doc(collectionOrdersRef);
    batch.set(docOrderRef, buyOrderData );

    batch.commit();

    return docOrderRef.id
  }