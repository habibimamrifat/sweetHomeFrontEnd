
const ImgToLink = async (img) => {
    const formImg = new FormData();
    formImg.append("image", img);
   
    const imgBbKey = import.meta.env.VITE_IMGBB_KEY;
    console.log("i am env",imgBbKey);
  
    try {
      const response = await fetch(
        `https://api.imgbb.com/1/upload?key=${imgBbKey}`,
        {
          method: "POST",
          body: formImg,
        }
      );
  
      if (!response.ok) {
        throw new Error("Image upload failed");
      }
  
      const imgLink = await response.json();
  
      if (imgLink && imgLink?.data) {
        return {
          displayLink: imgLink.data.display_url,
          deleteLink: imgLink.data.delete_url,
        };
      } else {
        throw new Error("Invalid response data");
      }
    } catch (error) {
      console.error("Error uploading image:", error);
      return { error: "Image upload failed" };
    }
  };
  
  export default ImgToLink;
