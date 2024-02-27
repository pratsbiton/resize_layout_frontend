// export const getDefaultDynamicWH = (id) => {
//   const scrollYWidth = window.innerWidth - document.body.clientWidth;
//   console.log({
//     width: parseInt((window.innerWidth * 25) / 100) - scrollYWidth,
//     height: parseInt((window.innerWidth * 100) / 100) - scrollYWidth,
//   },id,  'inside');

//   switch (id) {
//     case 1:
//       return {
//         width: parseInt((window.innerWidth * 25) / 100) - scrollYWidth,
//         height: parseInt((window.innerWidth * 50) / 100) - scrollYWidth,
//       };
//     case 2:
//       return {
//         width: parseInt((window.innerWidth * 75) / 100) - scrollYWidth,
//         height: parseInt((window.innerWidth * 50) / 100) - scrollYWidth,
//       };
//     case 3:
//       return {
//         width: parseInt((window.innerWidth * 100) / 100) - scrollYWidth,
//         height: parseInt((window.innerWidth * 50) / 100) - scrollYWidth,
//       };
//     default:
//       return {
//         width: 0,
//         height: 0,
//       };
//   }
// };

export const getDefaultDynamicWH = (id) => {
  const scrollYWidth = window.innerWidth - document.body.clientWidth;

  switch (id) {
    case 1:
      return {
        width: parseInt((window.innerWidth * 25) / 100) - scrollYWidth,
        height: parseInt((window.innerWidth * 50) / 100) - scrollYWidth,
      };
    case 2:
      return {
        width: parseInt((window.innerWidth * 75) / 100) - scrollYWidth,
        height: parseInt((window.innerWidth * 50) / 100) - scrollYWidth,
      };
    case 3:
      return {
        width: parseInt((window.innerWidth * 100) / 100) - scrollYWidth,
        height: parseInt((window.innerWidth * 50) / 100) - scrollYWidth,
      };
    default:
      return {
        width: 0,
        height: 0,
      };
  }
};

