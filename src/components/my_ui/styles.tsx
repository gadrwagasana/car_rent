import { cva } from 'class-variance-authority'

export const Style_button = cva(
  "btn btn-success shadow-success shadow-lg text-white hover:bg-warning duration-300 hover:shadow-warning border-none",
  {
    variants : {
      type : {
        link : "",
        product : "",
        icon : "btn btn-ghost btn-sm hover:bg-base-200 text-xl hover:scale-110 duration-300 shadow-none",
      }
    }
  }
)
