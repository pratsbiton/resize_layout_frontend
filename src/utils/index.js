export const getDefaultDynamicWH = (id) => {
  const scrollYWidth = window.innerWidth - document.body.clientWidth;

  switch (id) {
    case 1:
      return {
        width: (parseInt((window.innerWidth * 25) / 100)) - scrollYWidth,
        height: parseInt((window.innerWidth * 50) / 100),
      };
    case 2:
      return {
        width: parseInt((window.innerWidth * 73) / 100) - scrollYWidth,
        height: parseInt((window.innerWidth * 50) / 100),
      };
    case 3:
      return {
        width: parseInt((window.innerWidth * 98) / 100) - scrollYWidth,
        height: parseInt((window.innerWidth * 50) / 100),
      };
    default:
      return {
        width: 0,
        height: 0,
      };
  }
};

