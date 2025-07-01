// import { useEffect, useState } from "react";

// export function useFetch(fetchFnc, initialValue) {
//   const [isFetching, setIsFetching] = useState(false);
//   const [error, setError] = useState();
//   const [fetchedData, setFetchedData] = useState(initialValue);

//   useEffect(() => {
//     async function fetchData() {
//       setIsFetching(true);
//       try {
//         const meals = await fetchFnc();
//         setFetchedData(meals);
//         setIsFetching(false);
//       } catch (error) {
//         setError({
//           message: error.message || "Failed to fetch data ",
//         });
//         setIsFetching(false);
//       }
//     }
//     fetchData();
//   }, [fetchFnc]);

//   return {
//     isFetching,
//     fetchedData,
//     setFetchedData,
//     error,
//   };
// }

// const { error, fetchedData: data } = useFetch(submitOrder, []);

// const handleSubmit = useCallback(async function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const customerData = Object.fromEntries(formData.entries());
//   console.log(customerData);
//   const orderData = {
//     order: {
//       items: cartCtx.items,
//       customer: customerData,
//     },
//   };
//   await submitOrder(JSON.stringify(orderData));
//  await submitOrder(
//    JSON.stringify({
//      order: {
//        items: cartCtx.items,
//        customer: customerData,
//      },
//    })
//  );
//   sendRequest({
//     order: {
//       items: cartCtx.items,
//       customer: customerData,
//     },
//   });
//   sendRequest(
//     JSON.stringify({
//       order: {
//         items: cartCtx.items,
//         customer: customerData,
//       },
//     })
//   );
// }, []);

// handing inbuilt from methods

// async function handleSubmit(event) {
//   event.preventDefault();
//   const formData = new FormData(event.target);
//   const customerData = Object.fromEntries(formData.entries());
//   sendRequest(
//     JSON.stringify({
//       order: {
//         items: cartCtx.items,
//         customer: customerData,
//       },
//     })
//   );
// }
