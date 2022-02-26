from django.shortcuts import render, redirect, get_object_or_404
from django.contrib.auth.models import User
from .models import Photo
from django.contrib.auth.forms import UserCreationForm
from django.contrib.auth import authenticate, login

def signup(request):
    if request.method == 'POST':
        form = UserCreationForm(request.POST) # Userインスタンスを作成
    if form.is_valid():
        form.save() # Userインスタンスを保存
        input_username = form.cleaned_data['username']
        input_password = form.cleaned_data['password1']
        # フォームの⼊⼒値で認証できればユーザーオブジェクト、できなければNoneを返す
        new_user = authenticate(
            username=input_username,
            password=input_password,
        )
        # 認証成功時のみ、ユーザーをログインさせる
        if new_user is not None:
            # login関数は、認証ができてなくてもログインさせることができる。(認証は上のauthenticateで実⾏する)
            login(request, new_user)
            return redirect('app:users_detail', pk=new_user.pk)
        else:
            form = UserCreationForm()
        return render(request, 'app/signup.html', {'form': form})


def index(request):
    # Photoインスタンスを全件取得
    photos = Photo.objects.all().order_by('-created_at')
    # 取得したPhotoインスタンスをテンプレートに渡す
    return render(request, 'app/index.html', {'photos': photos})

def users_detail(request, pk):
    user = get_object_or_404(User, pk=pk)
    photos = user.photo_set.all().order_by('-created_at')
    return render(request, 'app/users_detail.html', {'user': user, 'photos': photos})