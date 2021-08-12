_N_E=(window.webpackJsonp_N_E=window.webpackJsonp_N_E||[]).push([[69],{BEZz:function(n,t,e){"use strict";e.r(t);var o=e("jg1C"),i=(e("ERkP"),e("QnPE"));t.default=function(){return Object(o.jsx)(i.a,{readme:"# @visx/bounds\n\n<p>\n  <a title=\"@visx/bounds npm downloads\" href=\"https://www.npmjs.com/package/@visx/bounds\">\n    <img src=\"https://img.shields.io/npm/dm/@visx/bounds.svg?style=flat-square\" />\n  </a>\n</p>\n\n```\nnpm install --save @visx/bounds\n```\n\n### `withBoundingRects` HOC\n\nIt's often useful to determine whether elements (e.g., tooltips) overflow the bounds of their parent\ncontainer and adjust positioning accordingly. The `withBoundingRects` higher-order component is\nmeant to simplify this computation by passing in a component's bounding rect as well as its\n_parent's_ bounding rect.\n\n### Example usage\n\nExample usage with a `<Tooltip />` component\n\n```javascript\nimport React from 'react';\nimport PropTypes from 'prop-types';\nimport { withBoundingRects, withBoundingRectsProps } from '@visx/bounds';\n\nconst propTypes = {\n  ...withBoundingRectsProps,\n  left: PropTypes.number.isRequired,\n  top: PropTypes.number.isRequired,\n  children: PropTypes.node,\n};\n\nconst defaultProps = {\n  children: null,\n};\n\nfunction Tooltip({ left: initialLeft, top: initialTop, rect, parentRect, children }) {\n  let left = initialLeft;\n  let top = initialTop;\n\n  if (rect && parentRect) {\n    left = rect.right > parentRect.right ? left - rect.width : left;\n    top = rect.bottom > parentRect.bottom ? top - rect.height : top;\n  }\n\n  return <div style={{ top, left, ...myTheme }}>{children}</div>;\n}\n\nTooltip.propTypes = propTypes;\nTooltip.defaultProps = defaultProps;\n\nexport default withBoundingRects(Tooltip);\n```\n",visxPackage:"bounds"})}},fAB1:function(n,t,e){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/bounds",function(){return e("BEZz")}])},fRV1:function(n,t){var e;e=function(){return this}();try{e=e||new Function("return this")()}catch(o){"object"===typeof window&&(e=window)}n.exports=e}},[["fAB1",0,2,1,3,8,10]]]);