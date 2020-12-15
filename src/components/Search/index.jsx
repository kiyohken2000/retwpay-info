import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import TextHighlighter from "./highlight"
import TextField from '@material-ui/core/TextField';
import Card from '@material-ui/core/Card';

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
                keywords
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

  // 検索処理 //
  const [result, setResult] = useState([])
  const search = () => {
    const value = props.value.toLowerCase()
    const temp = data.filter(e => {
      const target = `
        ${e.title.toLowerCase()}
        ${e.excerpt.toLowerCase()}
        ${e.keywords.join(" ").toLowerCase()}
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
                <Link to={`/${e.path}`}>
                  <Card style={{backgroundColor: "#F2F2F2"}}>
                    <TextHighlighter str={e.title} includes={props.value} />
                  </Card>
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
  const outFocus = () => {
    setTimeout(onBlur, 150)
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
        onBlur={outFocus}
        onChange={onChange}
      />
      {focus ? <SearchResult focus={focus} value={value} />: null}
    </div>
  )
}

export default Search
