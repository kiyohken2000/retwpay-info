import React, { useState, useEffect } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Link } from "gatsby"
import TextHighlighter from "./highlight"
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

const SearchResult = props => {
  // 全記事データ取得 //
  const tempData = useStaticQuery(graphql`
  query SearchData {
    allMdx( sort: { frontmatter: { date: DESC } } ) {
      edges {
        node {
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
      <div className="searchResult">
        <ul>
          {result.map(e => {
            return (
              <li key={e.slug}>
                <Link to={`/${e.path}`}>
                  <Card style={{backgroundColor: "#F2F2F2"}}>
                    <Typography variant="body1" gutterBottom>
                      <TextHighlighter str={e.title} includes={props.value} />
                    </Typography>
                  </Card>
                </Link>
                <Divider />
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
