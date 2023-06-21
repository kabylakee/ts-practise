type AnimationTimingFunc = "ease" | "ease-out" | "ease-in";
type AnimationID = string | number;


class BirdSignDataProvider {}
class FishSignDataProvider {}
class InsectSignDataProvider {}

type AnimalSignProvider =
  | BirdSignDataProvider
  | FishSignDataProvider
  | InsectSignDataProvider;

function animalSignValidate(
  signProvider: AnimalSignProvider
): boolean {
  return true;
}



type Point = {
  x: number;
  y: number;
};
 
// Exactly the same as the earlier example
function printCoord(pt: Point) {
  console.log("The coordinate's x value is " + pt.x);
  console.log("The coordinate's y value is " + pt.y);
}
 
printCoord({ x: 100, y: 100 });