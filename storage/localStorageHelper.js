export const getLost = () =>
  JSON.parse(localStorage.getItem("lostItems")) || [];

export const saveLost = (data) =>
  localStorage.setItem("lostItems", JSON.stringify(data));

export const getFound = () =>
  JSON.parse(localStorage.getItem("foundItems")) || [];

export const saveFound = (data) =>
  localStorage.setItem("foundItems", JSON.stringify(data));

export const deleteLost = (index) => {
  const items = getLost();
  items.splice(index, 1);
  saveLost(items);
};

export const deleteFound = (index) => {
  const items = getFound();
  items.splice(index, 1);
  saveFound(items);
};

export const editLost = (index, newData) => {
  const items = getLost();
  items[index] = newData;
  saveLost(items);
};

export const editFound = (index, newData) => {
  const items = getFound();
  items[index] = newData;
  saveFound(items);
};
