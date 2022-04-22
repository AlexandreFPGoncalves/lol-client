import React from 'react';
import { Block, InitialPage, CustomInput, SocialMediaButton } from '../../components';
import { rem } from '../../helpers';
import { useLauncherHelper } from './launcher.helper';
import { images } from '../../assets';

export const Launcher: React.FC = () => {
	const { resources, handleOnChange, values, socialMediaButtons } = useLauncherHelper();

	return (
		<InitialPage style={{ backgroundColor: 'var(--grey-900)' }}>
			<Block
				stack
				style={{
					margin: '4rem 5rem 0 5rem',
				}}
			>
				<Block
					style={{
						height: rem(750),
						width: '100%',
						margin: 0,
					}}
					align={{ horizontal: 'center' }}
				>
					<Block
						stack
						style={{
							width: '35%',
							height: '100%',
							backgroundColor: 'white',
							minWidth: rem(350),
							maxWidth: rem(350),
						}}
					>
						<Block stack align={{ horizontal: 'center' }} style={{ marginTop: rem(50) }}>
							<img src={images.riotLogo} alt="" style={{ width: '40%' }} />
						</Block>
						<Block stack align={{ horizontal: 'center' }} style={{ marginTop: rem(48) }}>
							<p style={{ fontSize: rem(24), fontWeight: 600, margin: 0 }}>Sign in</p>
						</Block>

						<Block stack align={{ horizontal: 'center' }}>
							<form autoComplete="off">
								<CustomInput
									value={values.username}
									label={resources.usernameLabel}
									onChange={handleOnChange}
									inputType={'text'}
								/>
								<CustomInput
									value={values.password}
									label={resources.passwordLabel}
									onChange={handleOnChange}
									inputType={'password'}
								/>
							</form>
						</Block>

						<Block style={{ marginTop: rem(20) }} align={{ horizontal: 'center' }}>
							{socialMediaButtons.map((button) => (
								<SocialMediaButton
									icon={button.icon}
									backgroundColor={button.backgroundColor}
									onHoverBackgroundColor={button.onHoverBackgroundColor}
									isBackgroundWhite={button.isBackgroundWhite}
									onClick={button.onClick}
								/>
							))}
						</Block>
					</Block>
					<Block
						stack
						style={{
							width: '65%',
							backgroundImage: `url(${images.launcherImage})`,
							backgroundRepeat: 'no-repeat',
							backgroundSize: 'auto',
						}}
					>
						{resources.title}
					</Block>
				</Block>
			</Block>
		</InitialPage>
	);
};
