# color-variation-generator

`generateColorVariation` is a function that generates random colors in a similar color range based on a given base hue value. It can be used to create multiple colors for gradient effects, and the colors are based on HSL (Hue, Saturation, Lightness) values.

## Installation

You can install the package using npm:

```bash
npm install color-variation-generator
```

Or you can use yarn:

```bash
yarn add color-variation-generator
```

## Usage

This package provides the generateColorVariation function. You can import and use it as follows:

```js
import { generateColorVariation } from "color-variation-generator";

const color = generateColorVariation({
  baseHue: 200,
  hueVariance: 50,
  gradientIndex: 0,
  gradientSteps: 5,
});

console.log(color); // Example output: "#4da6ff"
```

# Parameters

| Parameter       | Type   | Description                                                                                                                         |
| --------------- | ------ | ----------------------------------------------------------------------------------------------------------------------------------- |
| `baseHue`       | number | The base hue value, which is a number between 0 and 360. Similar colors are generated based on this value.                          |
| `hueVariance`   | number | The range of variation for the hue value, which is a number between 0 and 360. This value determines the difference between colors. |
| `gradientIndex` | number | The index of the current color in the array of generated colors. This is mainly used for creating gradient effects.                 |
| `gradientSteps` | number | The total number of colors to generate, required when creating colors for gradient effects.                                         |

## Example Values for `baseHue`

| Hue Value | Color   |
| --------- | ------- |
| 0         | Red     |
| 60        | Yellow  |
| 120       | Green   |
| 180       | Cyan    |
| 240       | Blue    |
| 300       | Magenta |

## Example Values for `hueVariance`

| Hue Variance | Description                                               |
| ------------ | --------------------------------------------------------- |
| 0            | Colors are generated with no variation from the base hue. |
| 50           | Colors are generated within a ±25 range of the base hue.  |
| 100          | Colors are generated within a ±50 range of the base hue.  |

## Return

The function returns a hex color code as a string, such as `#4da6ff`.

## License

This package is licensed under the MIT License.