import React from 'react'
import ReactDOM from 'react-dom'
import { get } from 'lodash'

class Cell extends React.Component {

  onMouseDown = () => {
    const onMouseMove = e => {
      // const left = ReactDOM.findDOMNode(this).getBoundingClientRect().left
      // this.props.setCellWidth(e.clientX - left + 1, this.props.index)
      this.props.ttt(e.clientX)
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', e => {
      const left = ReactDOM.findDOMNode(this).getBoundingClientRect().left
      this.props.setCellWidth(e.clientX - left + 1, this.props.index)
      window.removeEventListener('mousemove', onMouseMove)
    })
  }

  render () {
    // console.log(this.props)
    return (
      <div style={{ position: 'relative' }}>
        <input className='grid-cell disable-selection' style={{ width: this.props.column.width }} defaultValue={this.props.cell}/>
        <div className='grid-cell-resize' onMouseDown={this.onMouseDown}/>
      </div>
    )
  }
}

class Row extends React.Component {

  constructor (props) {
    super(props)
    this.state = {
      rowHeight: props.row.height,
      columns: []
    }
  }

  // componentDidMount() {
  //   let ttt = ReactDOM.findDOMNode(this).getBoundingClientRect().width + 1000
  //   const newColumns = []
  //
  //   const getCharCol = (i) => {
  //     const chars = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
  //     if (chars.length <= i) {
  //       return getCharCol(Math.floor(i / chars.length) - 1) + getCharCol(i % chars.length)
  //     } else {
  //       return chars[i]
  //     }
  //   }
  //
  //   for (let i = 0; i < 2; i++) {
  //     const column = this.props.columns.filter(it => it.column === getCharCol(i))[0]
  //     if (column) {
  //       newColumns.push(column)
  //     } else {
  //       newColumns.push({ column: getCharCol(i), width: 100 })
  //     }
  //     ttt = ttt - 100
  //   }
  //   // console.log(ReactDOM.findDOMNode(this).getBoundingClientRect())
  //   this.setState({ columns: newColumns })
  //   // console.log(newColumns)
  // }

  onMouseDown = () => {
    const onMouseMove = e => {
      const top = ReactDOM.findDOMNode(this).getBoundingClientRect().top
      this.setState({ rowHeight: e.clientY - top + 1 })
    }
    window.addEventListener('mousemove', onMouseMove)
    window.addEventListener('mouseup', () => window.removeEventListener('mousemove', onMouseMove))
  }

  render () {
    return (
      <div style={{ position: 'relative' }}>
        <div className='grid-row' style={{ height: this.state.rowHeight }}>
          {this.props.columns.map((column, index) => {
            const ttt = this.props.row.values && this.props.row.values.find(it => it.col === this.props.columns[index].col)
            return <Cell
                key={index}
                index={index}
                columns={this.props.columns}
                column={column}
                rows={this.props.rows}
                row={this.props.row}
                cell={ttt ? ttt.value : ''}
                setCellWidth={this.props.setCellWidth}
                ttt={this.props.ttt}
              />
          })}
        </div>
        <div className='grid-row-resize' onMouseDown={this.onMouseDown}/>
      </div>
    )
  }
}

class Grid extends React.Component {

  state = {
    rows: [],
    columns: [],
    left: 0
  }

  componentDidMount() {
    let ttt = ReactDOM.findDOMNode(this).getBoundingClientRect().height
    const newRows = [{ height: 20 }]
    for (let i = 0; /*ttt > 0*/i < 3; i++) {
      newRows.push({
        ...get(this.props.data.rows,`${i}`, { height: 25 }),
        values: [
          ...get(this.props.data.rows, `${i}.values`, []),
          { col: '', value: i + 1}
        ]
      })
      ttt = ttt - newRows[i].height
    }

    let ttt1 = ReactDOM.findDOMNode(this).getBoundingClientRect().width
    const newColumns = [{ col: '', width: 20 }]
    for (let i = 0; ttt1 > 0; i++) {
      newColumns.push(this.props.data.columns.find(it => it.col === this.getCharCol(i)) || { col: this.getCharCol(i), width: 100 })
      ttt1 = ttt1 - newColumns[i].width
    }
    newRows[0] = {
      height: 20,
      values: newColumns.map((it, index) => ({ col: it.col, value: this.getCharCol(index - 1) }))
    }
    this.setState({ rows: newRows, columns: newColumns })
  }

  getCharCol = (i) => {
    const chars = [ 'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z' ]
    if (i < 0) {
      return ''
    } else if (chars.length <= i) {
      return this.getCharCol(Math.floor(i / chars.length) - 1) + this.getCharCol(i % chars.length)
    } else {
      return chars[i]
    }
  }

  setCellWidth = (width, index) => {
    const ind = this.state.columns.findIndex(it => it.col === this.getCharCol(index - 1))
    const ttt = [
      ...this.state.columns.slice(0, ind),
      { col: this.getCharCol(index - 1), width },
      ...this.state.columns.slice(ind + 1)
    ]
    this.setState({ columns: ttt })
  }

  render () {
    return (
      <div className='grid'>
        {this.state.rows.map((row, index) => {
          return <Row
            key={index}
            rowIndex={index}
            columns={this.state.columns}
            rows={this.state.rows}
            row={row}
            setCellWidth={this.setCellWidth}
            ttt={(left) => this.setState({ left })}
          />
        })}
        <div style={{
          position: 'absolute',
          backgroundColor: 'black',
          top: 0,
          width: '2px',
          bottom: 0,
          left: this.state.left
        }}/>
      </div>
    )
  }
}

export default Grid
