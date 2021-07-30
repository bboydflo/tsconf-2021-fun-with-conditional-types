export {}


type LooseBoolean = "yes" | "no" | 0 | 1;

type YesNo = LooseBoolean & string

type ZeroOne = LooseBoolean & number