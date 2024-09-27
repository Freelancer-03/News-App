import React from 'react'

const NewsItem = (props)=> {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;
    return (
      <div className="my-3">
        <div className="card" >
          <div style={{
            display: 'flex',
            justifyContent: 'flex-end',
            position: 'absolute',
            right: 0,
          }}>
            <span class="badge rounded-pill bg-danger">{source}</span>
          </div>
          <img src={!imageUrl ? "https://www.reuters.com/resizer/v2/XBV4LTWIO5NJBMBCTDNLNZAT7A.jpg?auth=0c51f9240c301b822bef836b5160f8893bc0b91dc06a9dd46221ea4bbd90dcec" : imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small className="text-body-secondary">By {!author ? "Unknown" : author} on {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">Read More</a>
          </div>
        </div>
      </div>
    )
  }


export default NewsItem