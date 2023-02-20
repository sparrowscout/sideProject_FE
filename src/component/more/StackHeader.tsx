import styled from "styled-components";

import iconArrowBack from "@/style/icon/more/arrow_back.png";
import { useNavigate } from "react-router-dom";

interface StackHeaderProps {
	options?: {
		before?: {
			iconOptions?: {
				icon?: string;
				onClick?: () => void;
			};
		};
	};
	children?: React.ReactNode;
}

const StackHeader: React.FC<StackHeaderProps> = ({ options, children }): React.ReactElement => {
	const navigate = useNavigate();
	return (
		<Header>
			<HeaderBefore>
				<BackIcon
					src={iconArrowBack}
					alt="back"
					onClick={
						// onClick이 있을 경우 onClick을 실행하고, 없을 경우 뒤로가기를 실행한다.
						options?.before?.iconOptions?.onClick
							? options?.before?.iconOptions?.onClick
							: () => navigate(-1)
					}
				/>
			</HeaderBefore>
			<HeaderCenter>{children}</HeaderCenter>
			<HeaderAfter></HeaderAfter>
		</Header>
	);
};

export default StackHeader;

const Header = styled.div`
	width: 100%;
	height: 50px;
	border-bottom: 1px solid ${({ theme }) => theme.colors.bg.line};
	display: flex;
	align-items: center;
`;

const HeaderSide = styled.div`
	width: 50px;
	height: 50px;
	flex-shrink: 0;
	display: flex;
	justify-content: center;
	align-items: center;
`;

const HeaderBefore = styled(HeaderSide)``;
const HeaderCenter = styled.div`
	width: 100%;
	font-weight: 500;
	text-align: center;
`;
const HeaderAfter = styled(HeaderSide)``;

const BackIcon = styled.img`
	width: 11px;
`;