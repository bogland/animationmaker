"""user update

Revision ID: 09567330c4d4
Revises: 5a0f2a837bc9
Create Date: 2021-10-12 00:01:43.072758

"""
from alembic import op
import sqlalchemy as sa
from sqlalchemy.dialects import mysql

# revision identifiers, used by Alembic.
revision = '09567330c4d4'
down_revision = '5a0f2a837bc9'
branch_labels = None
depends_on = None


def upgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.drop_index('email', table_name='user')
    op.drop_index('ix_user_id', table_name='user')
    op.drop_index('username', table_name='user')
    op.drop_table('user')
    # ### end Alembic commands ###


def downgrade():
    # ### commands auto generated by Alembic - please adjust! ###
    op.create_table('user',
    sa.Column('id', mysql.INTEGER(), autoincrement=True, nullable=False),
    sa.Column('username', mysql.VARCHAR(length=30), nullable=False),
    sa.Column('type', mysql.INTEGER(), autoincrement=False, nullable=True),
    sa.Column('email', mysql.VARCHAR(length=30), nullable=False),
    sa.PrimaryKeyConstraint('id'),
    mysql_default_charset='utf8mb3',
    mysql_engine='InnoDB'
    )
    op.create_index('username', 'user', ['username'], unique=False)
    op.create_index('ix_user_id', 'user', ['id'], unique=False)
    op.create_index('email', 'user', ['email'], unique=False)
    # ### end Alembic commands ###
