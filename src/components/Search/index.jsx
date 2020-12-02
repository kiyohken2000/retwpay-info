import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import TextHighlighter from "./highlight"
import TextField from '@material-ui/core/TextField';

const SearchResult = props => {
  // 全記事データ取得 //
  const tempData = useStaticQuery(graphql`
  query SearchData {
    allMdx( sort: { fields: [frontmatter___date], order: DESC } ) {
      edges {
        node {
          body
              frontmatter {
                date(formatString: "YYYY-MM-DD")
                title
                path
                excerpt
              }
        }
      }
    }
  }
  `)
  const [data, setData] = useState([])
  useEffect(() => {
    const temp = []
    tempData.allMdx.edges.map(e => {
      temp.push(e.node.frontmatter)
    })
    setData(temp)
  }, [])

  /* 表示非表示の切り替え
  const [className, setClassName] = useState("")
  useEffect(() => {
    let id
    if (props.focus && props.value !== "") {
      id = setTimeout(() => {
        setClassName("active")
      }, 100)
    } else {
      id = setTimeout(() => {
        setClassName("")
      }, 100)
    }
    return () => {
      clearTimeout(id)
    }
  }, [props.focus, props.value])
  */

  // 検索処理 //
  const [result, setResult] = useState([])
  const search = () => {
    const value = props.value.toLowerCase()
    const temp = data.filter(e => {
      const target = `
        ${e.title.toLowerCase()}
        ${e.excerpt.toLowerCase()}
      `
      return target.indexOf(value) !== -1
    })
    setResult(temp)
  }
  useEffect(() => {
    if (props.value !== "") {
      search()
    }
  }, [props.value])

  return (
      <div>
        <ul>
          {result.map(e => {
            return (
              <li key={e.slug}>
                <Link to={`/${e.path}/`}>
                  <TextHighlighter str={e.title} includes={props.value} />
                </Link>
              </li>
            )
          })}
        </ul>
      </div>
  )
}

const Search = props => {
  const [focus, setFocus] = useState(false)
  const [value, setValue] = useState("")
  const onFocus = () => {
    setFocus(true)
  }
  const onBlur = () => {
    setFocus(false)
  }
  const onChange = e => {
    setValue(e.target.value)
  }
  return (
    <div>
      <TextField 
        id="outlined-search"
        label="ブログ内検索..."
        type="search"
        variant="outlined"
        onFocus={onFocus}
        onBlur={onBlur}
        onChange={onChange}
      />
      <SearchResult focus={focus} value={value} />
    </div>
  )
}

export default Search
