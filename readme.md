#### Wednesday 8:44pm - Nov 2, 2022

I bulk trimmed the white space around images in a directory using this command:

`find . -iname "*.jpg" -exec mogrify -trim {} \;`

#### Wednesday 3:03pm - Oct 26, 2022

After upgrading to MacOS Ventura, I discovered I was unable to sFTP into my Pantheon dev server.

The messsage I got was: 
>no matching host key type found. Their offer: ssh-rsa

I fixed this by editing /etc/ssh/ssh_config and adding this at the bottom under Host *

`HostKeyAlgorithms +ssh-rsa,ssh-dss`
