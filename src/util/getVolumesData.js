export const getVolumesData = (volumesData) => {
  if (!volumesData) {
    return [];
  }

  return volumesData.items.reduce((acc, currItem) => {
    if (currItem && currItem.volumeInfo) {
      acc.push({
        volumeInfo: currItem.volumeInfo,
        id: currItem.id,
      });
    }
    return acc;
  }, []);
};
