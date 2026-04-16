from django.contrib import admin
from django.contrib.admin import ModelAdmin

from account.models import AbstractUser, Group
from django import forms
from django.contrib.auth.forms import UserChangeForm, UserCreationForm
from .models import AbstractUser


@admin.action(description="Make user is staff")
def set_is_staff(self, request, queryset):
    queryset.update(is_staff=True)




class CustomUserChangeForm(UserChangeForm):
    password = forms.CharField(widget=forms.PasswordInput, required=False)

    class Meta:
        model = AbstractUser
        fields = '__all__'

class CustomUserCreationForm(UserCreationForm):
    class Meta(UserCreationForm):
        model = AbstractUser
        fields = ('email',)


class UserAdmin(admin.ModelAdmin):
    list_display = ['full_name', 'user_type', "is_staff"]
    search_fields = ['full_name']
    list_filter = ('user_type',)
    actions = [set_is_staff]
    model = AbstractUser
    form = CustomUserChangeForm
    add_form = CustomUserCreationForm


admin.site.register(AbstractUser, UserAdmin)

admin.site.register(Group)
