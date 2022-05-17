const BREAK_POINTS = [0, 576, 768, 992, 1280]

const MQMIN = BREAK_POINTS.map(
  bp => `@media (min-width: ${bp}px)`
)

const MQMAX = BREAK_POINTS.map(
  bp => `@media (max-width: ${bp}px)`
)

const COLOR = {
  PRIMER: '#2F8F9D',
  SECOND: '#3BACB6',
  THIRD: '#82DBD8',
  FOURTH: '#B3E8E5',
}

const FONTCOLOR = {
  SECONDARY: 'rgba(49,53,59,0.68)'
} 

const styling = { BREAK_POINTS, MQMIN, MQMAX, COLOR, FONTCOLOR }
export default styling