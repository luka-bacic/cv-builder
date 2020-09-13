# CV Builder

Simple Vue app for generating a CV with a layout [like this](https://github.com/luka-bacic/cv-builder/blob/master/src/assets/misc/example-cv.pdf).

## How to use

1. Clone repo

```
git clone git@github.com:luka-bacic/cv-builder.git
```

2. Install dependencies

```
npm i
```

3. Start development server

```
npm run serve
```

4. Open `/src/data.js` and add your information

5. Add your photo to `/src/assets/img/` and pass the file name of the photo to the `photoName` constant in `/src/data.js`

6. Print page to PDF (CTRL + P in Firefox and Chrome)

## Notes

The generated PDF was tested in latest Chrome and Firefox on Windows 10. In Chrome it is possible that text in the generated PDF will not be selectable (it would act as an image).

This issue can be bypassed by installing the font used in the app to your machine (the default font is Montserrat) AND printing to file using Firefox instead of Chrome.
