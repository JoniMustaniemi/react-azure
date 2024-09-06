export const getItems = async () => {
  try {
    const apiUrl = import.meta.env.VITE_BASE_URL || "http://localhost:5173";
    const response = await fetch(`${apiUrl}/api/items`);
    if (!response.ok) {
      throw new Error("Network response was not ok");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching items:", error);
    throw error;
  }
};

/**
 * Formats items by adding the appropriate image URL from the provided images object.
 *
 * @param {Array} data - The data array where the first element contains the items array.
 * @param {Object} images - An object mapping basenames to image URLs.
 * @returns {Array} - The array of items with an updated `imageUrl` property.
 */
export const formatItems = (data, images) => {
  const preparedItems = data[0].items.map((item) => ({
    ...item,
    imageUrl: images[item.basename] || "",
  }));
  return preparedItems;
};
