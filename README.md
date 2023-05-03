
# react-animated-text-loop

The `react-animated-text-loop` component is a React component that animates a loop of text characters. It provides two animation types: 

- One: Animates the characters by changing the color and position of each character alternatively. 

<video src="https://user-images.githubusercontent.com/47436766/236008608-b38001f3-6d07-4c0d-bdc6-59ac2615acb9.mp4"></video>

- Two: Animates the characters by moving them up and down in a loop.


<video src="https://user-images.githubusercontent.com/47436766/236008688-30d78472-a199-4c04-a92c-40c4228f9b38.mp4"></video>



## Props

The component accepts the following props:

- `fontSize`: The font size of the text characters.

- `textColor`: The color of the text characters.

- `latters`: A two-dimensional array of the text characters to be animated. 

- `fontWeight`: The font weight of the text characters.

- `AnimationLoopTime`: The duration of the animation loop in milliseconds.

- `characterAnimationSpeed`: The speed of the character animation in milliseconds.

- `AnimationType`: The type of animation to be used. Two values accepted: "One" or "Two".

- `hiddenOpacity`: The opacity of the hidden text characters.

## Usage

To use the `react-animated-text-loop` component, import it into your React component and render it:

``` javascript
import React from 'react';
import AnimatedTextLoop from './AnimatedTextLoop';

function MyComponent() {
  return (
    <AnimatedTextLoop 
      fontSize={30}
      textColor="#000"
      latters={[['H', 'e', 'l', 'l', 'o'], ['W', 'o', 'r', 'l', 'd']]}
      fontWeight="bold"
      AnimationLoopTime={2000}
      characterAnimationSpeed={50}
      AnimationType="One"
      hiddenOpacity="0"
    />
  );
}
```

In the example above, the `AnimatedTextLoop` component is used with the "One" animation type to animate the text "Hello" and "World". The animation loop duration is set to 2000 milliseconds, and the character animation speed is set to 50 milliseconds. The hidden opacity is set to 0 to hide the hidden text characters.

## License

This component is licensed under the MIT License.
