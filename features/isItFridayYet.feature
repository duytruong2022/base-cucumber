# Feature: Is it Friday yet?
#     Everybody wants to know when it's Friday

#     Scenario Outline: Today is or is not Friday
#         Given today is "<day>"
#         When I ask whether it's Friday yet
#         Then I should be told "<answer>"

#         Examples:
#             | day            | answer |
#             | Friday         | TGIF   |
#             | Sunday         | Nope   |
#             | anything else! | Nope   |
Feature: Search gg
    Everybody wants search somethinks by gg

    Scenario Outline: Search something
        Given search "<searchText>"
        When I want search
        Then I search by gg

        Examples:
            | searchText |
            | Youtube  |