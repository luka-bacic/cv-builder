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

The generated PDF was tested in latest Chrome and Firefox on Windows 10. It is possible that text in the generated PDF will not be selectable (it would act as an image).

To fix the Chrome issue:

1. Installing the font used in this app to your machine (the default font is Montserrat)

2. Print the page by pressing CTRL + P

3. In the `Destination` dropdown, select `Save as PDF` **instead** of `Microsoft Print to PDF`

It is also possible that links won't be preserved in the PDF when printing with Firefox. Unfortunately I was not able to find a workaround for this. Please use Chrome to generate the PDF
