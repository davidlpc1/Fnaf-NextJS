const { describe, it } = require("mocha");
const assert = require("assert");
const animatronics = require("../pages/api/v1/animatronics.json");

describe("Animatronics tests", () => {
  it("Verify if animatronics are an array", () => {
    assert.ok(Array.isArray(animatronics));
  });

  it("Verify if all the animatronics have these values:name,image and game", () => {
    const allAnimatronicsHaveTheCorrectValues = animatronics.every(
      (animatronic) => Object.keys(animatronic).join("-") === "name-image-game"
    );
    assert.ok(allAnimatronicsHaveTheCorrectValues);
  });

  it("Verify if all the animatronics have an non-null name,non-null image and non-null game", () => {
    let allAnimatronicsHaveANameImageAndGame = true;
    animatronics.forEach(({ name, image, game }) => {
      if (typeof name !== "string" && name === "" && name.length <= 0)
        allAnimatronicsHaveANameImageAndGame = false;
      if (typeof image !== "string" && image === "" && image.length <= 0)
        allAnimatronicsHaveANameImageAndGame = false;
      if (typeof game !== "string" && game === "" && game.length <= 0)
        allAnimatronicsHaveANameImageAndGame = false;
    });
    assert.ok(allAnimatronicsHaveANameImageAndGame);
  });

  it("Verify if all the animatronics have the name with the first letter capitalize", () => {
    const allAnimatronicsHaveTheNameWithTheFirstLetterCapitalize = animatronics.every(
      (animatronic) => animatronic.name[0] === animatronic.name[0].toUpperCase()
    );
    assert.ok(allAnimatronicsHaveTheNameWithTheFirstLetterCapitalize);
  });

  it("Verify if all the images keys are links", () => {
    function isValidUrl(string) {
      try {
        new URL(string);
      } catch (err) {
        return false;
      }

      return true;
    }

    const allImagesKeysAreValidLinks = animatronics.every((animatronic) =>
      isValidUrl(animatronic.image)
    );
    assert.ok(allImagesKeysAreValidLinks);
  });

  it("Verify if the animatronics games are of Five Nights at Freddy", () => {
    const allAnimatronicsGamesAreOfFNAF = animatronics.every((animatronic) => {
      const pattern = /Five Nights at Freddy/gi;
      return animatronic.game.match(pattern);
    });
    assert.ok(allAnimatronicsGamesAreOfFNAF);
  });
});
