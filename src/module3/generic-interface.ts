// Let's see how to write generic interface by seeing an example

interface CrushInterface<T> {
  name: string;
  husband: T; // 'T' means I will say the type of husband while use
}

// Now, If i pass boolean then husband type will be boolean, If i pass string then husband type will be string accordingly.

// here, I am using boolean value for husband type. That means i have to passed boolean in CrushInterface <>
const crush1: CrushInterface<boolean> = {
  name: "Keya",
  husband: true,
};
// here, I am using string value for husband type. That means i have to passed string in CrushInterface <>
const crush2: CrushInterface<string> = {
  name: "Keya",
  husband: "Dipta",
};

// here, I am using object for husband type. That means i have to passed object in CrushInterface <>
const crush3: CrushInterface<object> = {
  name: "Keya",
  husband: {
    name: "Dipta Saha",
    developer: true,
  },
};
// using those concept, I can explicitly define that object for husband in <>
const crush4: CrushInterface<{ name: string; developer: boolean }> = {
  name: "Keya",
  husband: {
    name: "Dipta Saha",
    developer: true,
  },
};
// Similarly, i can use type alias instead
type crushHusbandType = {
  name: string;
  developer: boolean;
};
const crush5: CrushInterface<crushHusbandType> = {
  name: "Keya",
  husband: {
    name: "Dipta Saha",
    developer: true,
  },
};
// Similarly, i can use interface instead type alias
interface crushHusbandInterface {
  name: string;
  developer: boolean;
}
const crush6: CrushInterface<crushHusbandInterface> = {
  name: "Keya",
  husband: {
    name: "Dipta Saha",
    developer: true,
  },
};

// Using single type concept, We can using multiple type like before. let's see an example with interface
interface WifeInterface<T, X> {
  name: string;
  husband: T; // 'T' means I will say the type of husband while use
  child: X; // 'X' means I will say the type of child while use
}
interface HusbandInterface {
  name: string;
  developer: boolean;
}

const crush7: WifeInterface<HusbandInterface, string> = {
  name: "Keya",
  husband: {
    name: "Dipta Saha",
    developer: true,
  },
  child: "Baby Name",
};

// Same thing with optional and default parameter
interface WifeInterface1<T, X, U = null> {
  name: string;
  husband: T; // 'T' means I will say the type of husband while use
  child: X; // 'X' means I will say the type of child while use
  moreChild?: U; // by default it hold null but if we pass somethig then it will overwrite
}
interface HusbandInterface1 {
  name: string;
  developer: boolean;
}

const crush8: WifeInterface1<HusbandInterface1, string, boolean> = {
  name: "Keya",
  husband: {
    name: "Dipta Saha",
    developer: true,
  },
  child: "Baby Name",
  moreChild: true, // it will replace with null
};

console.log(crush8);
