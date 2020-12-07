const images = new Array(25)
        .fill("https://tom.imgix.net/artsy/")
        .map((e, i) => e + (i + 1) + `.jpg`);

export default images;
