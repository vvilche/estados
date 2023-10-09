
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

function SocialButton({icon}) {
	return (
		<figure className="iconos" >
			<FontAwesomeIcon icon={icon} size="2x" />
		</figure>
  )
}
export default SocialButton;