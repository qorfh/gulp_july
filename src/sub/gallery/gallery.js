$(document).ready(function(){	
	console.log('gallery');
	var url = 'https://www.flickr.com/services/rest/?method=flickr.interestingness.getList';
	var url_search = 'https://www.flickr.com/services/rest/?method=flickr.photos.search';
	var key = '9016fec442c4864611a0dd0d695c566e';

    getFlickr(url, key);

	function getFlickr(url,key){
		$.ajax({
			url:url,
			dataType:'json',
			data : {
				api_key : key,
				per_page : 50,
				format : 'json',
				nojsoncallback : 1
			}
		})
		.success(function(data){		
			var items = data.photos.photo;
			//https://farm{farm-id}.staticflickr.com/{server-id}/{id}_{secret}_[mstzb].jpg
			$(items).each(function(){
				console.log(this);
				var farm  = this.farm;
				var server = this.server;
				var id = this.id;
				var secret = this.secret;
				var title = this.title;

				$('section.flicker')
					.append(
						$('<article>')
							.append(
								$('<div class="inner">')
									.append(
										$('<a>')
											.attr({
												href : 'https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_b.jpg'
											})
											.append(
												$('<img>').attr({
													src : 'https://farm'+farm+'.staticflickr.com/'+server+'/'+id+'_'+secret+'_m.jpg'
												})
											)
									)
									.append(
										$('<p>').text(title)
									)
							)
					)
			})
		})
		.error(function(){
			alert('Fail to Load Data!!!');
		})
	}

	//키워드 입력후 검색버튼 클릭시 해당 검색내용 다시 출력
    $('#search button').on('click',function(){
		console.log('dd')
        var tag = $('.tag').val();
        $('.flicker').empty();
        $.ajax({
            url : url_search, //요청할 검색주소
            dataType : 'json',
            data : {
                api_key : key,
                per_page : 5, //검색할 이미지 갯수
                tags : tag, //검색할 태그명
                tagmode : 'any',
                privacy_filter : 5,
                format : 'json',
                nojsoncallback : 1
            }
        })
        .success(function(data){
            console.log(data.photos.photo);
            var items = data.photos.photo;
    
            $(items).each(function(){
                $('section.flicker')
					.append(
						$('<article>')
							.append(
								$('<div class="inner">')
									.append(
										$('<a>')
											.attr({
												href : 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_b.jpg'
											})
											.append(
												$('<img>').attr({
													src : 'https://farm'+this.farm+'.staticflickr.com/'+this.server+'/'+this.id+'_'+this.secret+'_m.jpg'
												})
											)
									)
									.append(
										$('<p>').text(this.title)
									)
							)
					)
            })
        })
        .error(function(){
            alert('Fail to Load data!!');
        });
    });

	// popup open
	$('body').on('click', '.flicker article .inner' , function(e){
		e.preventDefault();
		console.log('click');
		var imgSrc = $(this).children('a').attr('href');

		$('.imgPop>img').attr({src : imgSrc});
		$('.imgPop').fadeIn();
	});

	// popup close
	$('.imgPop span').on('click',function(){
        $('.imgPop').fadeOut();
    });
}); 











