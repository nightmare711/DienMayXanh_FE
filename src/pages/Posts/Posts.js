import React from 'react'
import './Posts.css'

export const PostsPage = ({ list }) => {
	const [listContent, setListContent] = React.useState(null)
	React.useEffect(() => {
		const temp = []
		for (let key in list) {
			temp.push(list[key])
		}
		console.log(temp)
		setListContent(temp)
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [])
	return (
		<div className='posts-page'>
			<div className='heading-primary'>Bài viết</div>
			<div className='list-posts'>
				{listContent
					? listContent.map((content, index) => {
							return content.imgUrl ? (
								<img key={index} className={content.className} src={content.imgUrl} alt='dsad' />
							) : (
								<div key={index} className={content.className}>
									{content.content}
								</div>
							)
					  })
					: null}
				<div className='footer'>
					<h2>
						<b>Sửa chữa điện máy xanh</b>
					</h2>
					<span>
						<b>Trụ sở chính: </b> Cao ốc A, Ngô Gia Tự, Phường 3, Quận 10, TP HCM
					</span>
					<span>
						<b>Tỉnh/TP:</b>
					</span>
					<span>
						<b>Quốc gia:</b>
					</span>
					<span>
						<b>Hotline:</b> 02862751423
					</span>
					<span>
						<b>Điện thoại:</b> 0397575917
					</span>
					<span>
						<b>E-mail:</b> suachua-dienmayxanh@gmail.com
					</span>
					<span>
						<b>Website: </b> suachua-dienmayxanh.vn
					</span>
				</div>
			</div>
		</div>
	)
}
