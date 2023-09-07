// const data = {
//     A: {
//       Subjects: ["Math", "Science", "History"],
//       Faculty: ["John Smith", "Jane Doe", "David Johnson","Michael Clark","Helen Davis"],
//       "Start Date": "2023-09-01",
//       "End Date": "2023-12-31",
//       Branches: {
//         "Branch A": {
//           Faculty: "Alice Brown",
//           total: {
//             completed: 30,
//             joinedNew: 15,
//             ongoing: 25,
//           },
//         },
//         "Branch B": {
//           Faculty: "Bob Wilson",
//           total: {
//             completed: 28,
//             joinedNew: 12,
//             ongoing: 22,
//           },
//         },
//       },
//     },
//     B: {
//       Subjects: ["English", "Physics", "Chemistry"],
//       Faculty: ["Mary Adams", "Michael Clark", "Sarah Evans","Helen Davis"],
//       "Start Date": "2023-08-15",
//       "End Date": "2023-12-31",
//       Branches: {
//         "Branch A": {
//           Faculty: "Eve Green",
//           total: {
//             completed: 35,
//             joinedNew: 20,
//             ongoing: 30,
//           },
//         },
//         "Branch B": {
//           Faculty: "Frank White",
//           total: {
//             completed: 32,
//             joinedNew: 14,
//             ongoing: 28,
//           },
//         },
//       },
//     },
//     C: {
//       Subjects: ["Computer Science", "Economics", "Psychology"],
//       Faculty: ["George Lee", "Helen Davis", "Ivy Martin","Michael Clark"],
//       "Start Date": "2023-09-15",
//       "End Date": "2023-12-31",
//       Branches: {
//         "Branch A": {
//           Faculty: "Jack Brown",
//           total: {
//             completed: 40,
//             joinedNew: 25,
//             ongoing: 35,
//           },
//         },
//         "Branch B": {
//           Faculty: "Jill Smith",
//           total: {
//             completed: 38,
//             joinedNew: 18,
//             ongoing: 32,
//           },
//         },
//       },
//     },
//   };
  
 

//  let commonFaculty = [];
//  data.A.Faculty.forEach((facultyA) => {
//        const isCommon = data.B.Faculty.includes(facultyA) && data.C.Faculty.includes(facultyA)
       
//        if(isCommon)
//        {
//            commonFaculty.push(facultyA)
//        }
//  });

//  console.log(commonFaculty);



// const branchData = Object.values(data).flatMap((program) => {
//     return Object.values(program.Branches);
//   });
  
  
// const bData = branchData.map((Branches) => {
//     return Branches.total;
//   });

// Object.values(bData).map((item)=>{
//     console.log(item.completed)
// })


const data = {
    ecommerce_companies: [
      {
        name: "Company A",
        start_date: "2020-01-15",
        no_of_employees: 500,
        ceo_name: "John Smith",
        products: [
          {
            category: "Electronics",
            items: [
              {
                isbn: "978-1234567890",
                date: {
                  manufacture_date: "2023-03-10",
                  expiry_date: "2025-03-10",
                  release_date: "2023-04-01",
                },
                production: {
                  information: {
                    product_type: "Smartphone",
                    manufacturer: {
                      manufactured_by: "Manufactured by pratham",
                      supply_by: "Supplied by pratham",
                    },
                  },
                  price: 599.99,
                  description: "High-end smartphone with advanced features.",
                  size: "5.5 inches",
                  popularity: 4.5,
                  color: ["Red", "Blue", "Green"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "Company B",
        start_date: "2018-05-20",
        no_of_employees: 750,
        ceo_name: "Emily Johnson",
        products: [
          {
            category: "Clothing",
            items: [
              {
                isbn: "978-9876543210",
                date: {
                  manufacture_date: "2023-02-15",
                  expiry_date: "2024-12-31",
                  release_date: "2023-03-15",
                },
                production: {
                  information: {
                    product_type: "Cotton shirt",
                    manufacturer: {
                      manufactured_by: "Manufactured by dwitya",
                      supply_by: "Supplied by dwitya",
                    },
                  },
                  price: 29.99,
                  description: "Comfortable cotton T-shirt in various colors.",
                  size: "Medium",
                  popularity: 4.0,
                  color: ["Yellow", "Green"],
                },
              },
            ],
          },
        ],
      },
      {
        name: "Company C",
        start_date: "2019-11-08",
        no_of_employees: 600,
        ceo_name: "David Wilson",
        products: [
          {
            category: "Books",
            items: [
              {
                isbn: "978-5432109876",
                date: {
                  manufacture_date: "2022-07-20",
                  expiry_date: null,
                  release_date: "2022-08-15",
                },
                production: {
                  information: {
                    product_type: "KopyKitab",
                    manufacturer: {
                      manufactured_by: "Manufactured by tritya",
                      supply_by: "Supplied by tritya",
                    },
                  },
                  price: 14.99,
                  description: "Bestselling fiction novel by a renowned author.",
                  size: "Paperback",
                  popularity: 4.8,
                  color: ["pink", "orange"],
                },
              },
            ],
          },
        ],
      },
    ],
  };
 
  

//   const productTypes = data.ecommerce_companies.map((company)=>{
//     return company.products;
//   })


//    productTypes.map((product)=>{
//                console.log(product.items)
//    })


data.ecommerce_companies.map((company) => {
    return company.products.map((product) => {
      return product.items.map((item) => {
        console.log(item.production.information.manufacturer);
      });
    });
  });
  