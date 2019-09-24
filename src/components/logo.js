import React from "react"

class Logo extends React.Component {
  constructor(props) {
    super(props)
  }
  render() {
    return (
      <svg
        version="1.1"
        className={this.props.isScrolled}
        x="0px"
        y="0px"
        viewBox="0 0 1000 1000"
      >
        <g>
          <path
            d="M1000,977.12c-11.04,8.86-22.97,14.9-35.78,18.1c-12.83,3.19-25.73,4.79-38.7,4.79c-44.47,0-83.98-7.18-118.55-21.55
                c-34.57-14.37-64.92-34.15-91.04-59.34c-26.13-25.2-48.37-54.82-66.7-88.88c-18.34-34.06-33.59-70.78-45.76-110.17
                c-12.17-39.38-21.51-80.54-27.99-123.47c-6.5-42.93-10.88-85.77-13.15-128.53c-2.27-42.75-2.85-84.62-1.7-125.6
                c1.13-40.98,3.32-79.03,6.57-114.16c-5.84,9.58-12.99,24.84-21.42,45.77c-8.44,20.94-17.77,45.42-28,73.44
                c-10.22,28.03-20.86,58.63-31.89,91.8c-11.04,33.18-21.99,66.62-32.86,100.32c-10.88,33.71-21.42,66.79-31.64,99.25
                c-10.22,32.47-19.31,62-27.26,88.61c-7.96,26.61-14.77,49.23-20.45,67.86c-5.68,18.63-9.33,31.13-10.95,37.52
                c-1.3,4.26-3,9.58-5.11,15.97c-2.11,6.39-4.71,12.59-7.79,18.63c-3.09,6.03-6.66,11.18-10.71,15.43
                c-4.06,4.26-8.69,6.39-13.88,6.39c-5.84,0-10.71-2.58-14.61-7.72c-3.89-5.15-7.06-11.27-9.49-18.36
                c-2.43-7.1-4.38-14.19-5.84-21.29c-1.46-7.1-2.52-12.77-3.16-17.03c-1.95-14.9-3.74-33.71-5.36-56.41
                c-1.63-22.71-3.01-47.9-4.14-75.57c-1.14-27.67-2.03-57.21-2.68-88.61c-0.65-31.4-1.22-62.97-1.7-94.73
                c-0.49-31.75-0.81-62.97-0.97-93.67c-0.17-30.68-0.33-59.42-0.49-86.22c-0.17-26.78-0.24-50.83-0.24-72.11c0-21.29,0-38.32,0-51.09
                c-7.14,17.75-15.66,40.27-25.56,67.59c-9.9,27.33-20.61,58.01-32.13,92.07c-11.52,34.06-23.54,70.7-36.03,109.9
                c-12.5,39.21-24.83,79.56-37,121.07c-12.17,41.51-23.86,83.38-35.05,125.6c-11.2,42.22-21.18,83.2-29.94,122.94
                c-0.97,3.54-2.19,7.89-3.65,13.04c-1.46,5.14-3.33,10.02-5.6,14.64c-2.27,4.61-5.11,8.6-8.52,11.97
                c-3.41,3.37-7.55,5.06-12.42,5.06c-4.55,0-8.6-1.6-12.17-4.79c-3.58-3.19-6.57-7.01-9.01-11.44c-2.43-4.44-4.38-9.23-5.84-14.37
                c-1.46-5.15-2.36-9.85-2.68-14.1c-1.63-8.87-3.01-18.63-4.14-29.27c-1.14-10.64-2.12-21.55-2.92-32.73
                c-0.81-11.18-1.54-22.18-2.19-33c-0.65-10.83-1.3-20.84-1.95-30.07c-3.58-48.6-6.09-96.68-7.55-144.23
                C0.73,528.83,0,480.93,0,432.68c0-47.54,0.73-94.73,2.19-141.56s3.65-94.2,6.57-142.1c0.97-13.84,2.43-29.35,4.38-46.57
                c1.95-17.21,5.76-33.44,11.44-48.7c5.68-15.25,13.95-28.02,24.83-38.32C60.29,5.15,75.14,0,93.96,0c4.54,0,8.44,1.16,11.68,3.46
                c3.24,2.31,4.87,6.3,4.87,11.97v5.32c-2.92,21.29-5.84,42.49-8.76,63.6c-2.92,21.11-6.01,42.67-9.25,64.66
                c-7.79,70.97-14.36,141.83-19.72,212.61c-5.36,70.78-8.03,142.01-8.03,213.68c0,28.03,0.49,55.71,1.46,83.02
                c0.97,27.32,2.75,54.82,5.35,82.49c22.4-75.92,42.11-143.16,59.15-201.7c17.04-58.54,32.05-109.81,45.03-153.81
                c12.98-43.99,23.93-81.51,32.86-112.56c8.92-31.04,16.47-57.03,22.64-77.97c6.16-20.93,11.03-37.69,14.61-50.29
                c3.57-12.59,6.49-22.35,8.76-29.27c2.27-6.92,3.89-11.97,4.87-15.17c0.97-3.19,1.95-6.03,2.92-8.51
                c4.87-12.06,11.52-22.88,19.96-32.46c8.44-9.58,19.31-14.37,32.62-14.37c9.08,0,16.47,2.49,22.15,7.45
                c5.68,4.97,10.14,11.18,13.39,18.63c3.24,7.45,5.43,15.62,6.57,24.48c1.13,8.87,1.7,17.03,1.7,24.48
                c-0.65,55-2.11,109.37-4.38,163.12c-2.27,53.75-4.22,107.06-5.84,159.93c-1.63,52.87-2.36,105.37-2.19,157.53
                c0.16,52.16,2.35,104.14,6.57,155.93c12.98-41.86,24.99-81.34,36.03-118.41c11.03-37.07,21.5-72.46,31.4-106.17
                c9.9-33.7,19.47-66.17,28.72-97.39c9.25-31.22,18.82-62.08,28.72-92.6c9.9-30.51,20.21-61.02,30.92-91.54
                c10.71-30.51,22.56-61.91,35.54-94.2c2.92-6.39,6.16-12.86,9.74-19.42c3.57-6.56,7.62-12.51,12.17-17.83
                c4.54-5.32,9.74-9.75,15.58-13.31c5.84-3.54,12.33-5.32,19.47-5.32c10.06,0,18.01,3.55,23.86,10.64
                c5.84,7.1,10.3,15.62,13.39,25.55c3.08,9.94,5.11,20.31,6.09,31.13c0.97,10.83,1.46,19.96,1.46,27.41
                c0,32.65-0.97,68.74-2.92,108.3c-1.95,39.57-3.33,80.63-4.14,123.2c-0.81,42.58-0.41,85.68,1.22,129.32
                c1.62,43.64,6,85.87,13.14,126.66c7.14,40.81,17.69,78.94,31.65,114.42c13.95,35.47,32.78,66.43,56.48,92.87
                c23.69,26.43,52.98,47.27,87.88,62.53c34.89,15.25,76.84,22.89,125.85,22.89c7.46,0,14.68-0.62,21.66-1.86
                c6.98-1.25,13.71-3.46,20.2-6.65L1000,977.12z"
          />
        </g>
      </svg>
    )
  }
}
export default Logo
