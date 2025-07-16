// Conditional Types with infer (Inference Type)


// Syntax
// type Conditional<T> = T extends string ? "String Type" : "Not String Type";


//exw 1
type IsString<T> = T extends string ? true : false;
type Tone = IsString<"Hello"> // true
type Ttwo = IsString<50> // false 

// => Infer ( ဖြည်လိုက်တာ ) (Extract Type from Array)

// Syntax 

// typ


