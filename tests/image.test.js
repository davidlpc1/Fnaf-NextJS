const { describe, it } = require("mocha");
const assert = require("assert");
const images = require("../pages/api/v1/image/images.json");

describe("Images tests", () => {
  it("Verify if images are an array", () => {
    assert.ok(Array.isArray(images));
  });

  it("Verify if all images contain an url and name",() => {
    const allImagesHaveCorrectKeys = images.every(
        (img) => Object.keys(img).join("-") === "name-image"
      );
      assert.ok(allImagesHaveCorrectKeys);
  })

  it("Verify if all images contain keys non-null",() => {
    let allImagesHaveNonNullValues = true;
    images.forEach(({ name, image }) => {
      if (typeof name !== "string" || name === "" || name.length <= 0)
        allImagesHaveNonNullValues = false;
      if (typeof image !== "string" || image === "" || image.length <= 0)
        allImagesHaveNonNullValues = false;
    });
    assert.ok(allImagesHaveNonNullValues);
  })

  it("Verify if all images contain an true url",() => {
    function isValidUrl(string) {
        try {
          new URL(string);
        } catch (err) {
          return false;
        }
  
        return true;
      }
  
      const allImagesKeysAreValidLinks = images.every((img) =>
        isValidUrl(img.image)
      );
      assert.ok(allImagesKeysAreValidLinks);
  })

  it("Verify if all images contain an https url",() => {
    const allImagesKeysAreHTTPS = images.every((img) =>
        img.image.indexOf("https") > -1
    );
    assert.ok(allImagesKeysAreHTTPS)
  })
});
