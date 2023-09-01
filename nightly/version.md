commit f8975a67f81b62d90db1e508a85c3c894e995e95
Author: Konstantin Gogov <68374332+kgogov@users.noreply.github.com>
Date:   Fri Sep 1 16:47:33 2023 +0300

    fix(ui5-shellbar): align notification counter (#7490)
    
    The notification counter badge is being trimmed when it is
    contained in the last element in the ShellBar.
    Also adjusted the RTL support.
    
    This change is continuation of #7208.
