# CV Builder

Simple Vue app for generating a CV with a layout [like this](https://github.com/luka-bacic/cv-builder/blob/master/src/assets/misc/example-cv.pdf).

# How to use

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

# Troubleshooting

## Printed layout doesn't match the page dimensions

This layout was designed for A4 paper in portrait mode. When priting the page to PDF, please make sure to select `A4` instead of `Letter` in the advanced print settings.

## Text is not selectable in the generated PDF

It is possible the text in the generated PDF will not be selectable (it would act as an image).

To fix this in Chrome:

1. Install the font used in this app to your machine (the default font is [Montserrat](https://fonts.google.com/specimen/Montserrat))

2. Print the page by pressing CTRL + P

3. In the `Destination` dropdown, select `Save as PDF` **instead** of `Microsoft Print to PDF`

For Firefox it should be enough to just complete step 1.

## Links not working in the generated PDF

It is also possible that links won't be preserved in the PDF when printing with Firefox. They will be styled as links, but nothing happens when they are clicked on. Unfortunately I was not able to find a workaround for this. Please use Chrome to generate the PDF.

## Links are purple in the PDF

Open the dev server in an incognito/private window, and then save the page as PDF.
