# Image processing API (Udacity)

Built by A. Marzouk

## Installation

```bash
npm install
```

## Scripts:

### To build and compile project assets:

```bash
npm run build
```

### To run production server:

```bash
npm run start-prod
```

### To run project tests:

```bash
npm run test
```

### To run dev server:

```bash
npm run start
```

### To run prettier:

```bash
npm run prettier
```

### To run eslint:

```bash
npm run lint
```

## Usage

```python

To resize an image, you can hit this endpoint
/api/images

You should provide these parametrs:

1- filename (it should be a string and it should exist in the available images list)
[encenadaport, fjord, icelandwaterfall, palmtunnel, santamonica]
2- width (it should be an integer number)
3- height (it should be an integer number )

Example of the get api request:
/api/images?filename=palmtunnel&width=200&height=400

You should recieve the resized image back to the browser.

```

## Features:

```python

- Resize images in the available images list.
- Allows for multiple sizes of the same image.

```

