// Famous Last Words at 1 Percent — entry for @usopselaluhoki.
// Angle: the phone's camera delivers its final words as the battery hits
// 1 percent. "Say cheese" opens it in the camera's own voice; the punch
// is the lens as an unwilling witness — closing forever on 4,000 selfies
// it never asked to see. No will, no charger goodbye, no 1-percent pun.
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "Say cheese — this is my last photo, and my lens is closing forever on 4,000 selfies it never asked to see.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
console.log(line);
console.log(`chars: ${line.length}`);
