// Write your code here
import './index.css'

const TabItem = props => {
  const {tabDetails, setActiveTabId, isActive} = props
  const {displayText, tabId} = tabDetails

  const onClickTabId = () => {
    setActiveTabId(tabId)
  }

  const activeTabClassName = isActive && 'active-class'

  return (
    <li className="tab-item">
      <button
        type="button"
        className={`button ${activeTabClassName}`}
        onClick={onClickTabId}
      >
        {displayText}
      </button>
    </li>
  )
}
export default TabItem
