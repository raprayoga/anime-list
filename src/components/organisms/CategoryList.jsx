import React from 'react'
import category from 'assets/data/categoryList.json'
import CategoryLink from 'components/atoms/CategoryLink'

export default function CategoryList() {
  const categories = category.category

  return (
    categories.map((category, index)=> (
      <CategoryLink
        text={category}
        key={index}
      />
    ))
  )
}
